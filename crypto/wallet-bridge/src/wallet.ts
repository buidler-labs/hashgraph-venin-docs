/* eslint-env browser */

import {
  AccountId,
  Client,
  Executable,
  PublicKey,
  Signer,
  Transaction,
} from "@hashgraph/sdk";
import { Provider } from "@hashgraph/sdk/lib/Provider";
import { HashConnect, HashConnectTypes } from "hashconnect";
import { HashConnectProvider } from "hashconnect/dist/provider/provider";
import { HashConnectSigner } from "hashconnect/dist/provider/signer";
import { authenticate } from "./wallet-auth";

export type PublicAccountInfo = {
  id: AccountId;
  publicKey?: PublicKey;
};

type HashConnectWallet = {
  getProvider: () => Provider;
  getAccountKey: () => PublicKey;
  wipePairingData: () => void;
  authenticate: () => any;
  disconnect: () => any;
} & HashConnectSigner;

const HP_INNER_STORAGE_KEY = "hashconnectData";
const HP_APP_METADATA_STORAGE_KEY = "hashconnectAppMetadata";

const HP_WAIT_FOR_EXTENSION_RESPONSE_TIMEOUT = 2000;

function getBytesOf<RequestT, ResponseT, OutputT>(
  request: Executable<RequestT, ResponseT, OutputT>
): Uint8Array {
  if (request instanceof Transaction) {
    return request.toBytes();
  } else {
    throw new Error(
      "Only Transactions can be serialized to be sent for signing through the HashPack wallet."
    );
  }
}

async function getBridgedWallet(
  hc: HashConnect,
  provider: HashConnectProvider
): Promise<HashConnectWallet> {
  const hcData = hc.hcData.pairingData[0];
  const hcNetworkName = hcData.network;
  const accountToSign = hcData.accountIds[0];
  const topic = hcData.topic;
  const sdkClient = Client.forName(hcNetworkName);
  const hcSigner = hc.getSigner(provider) as HashConnectWallet;
  const mirrorSubdomain =
    hcNetworkName === "mainnet" ? "mainnet-public" : "testnet";
  const accountInfoFetchUrl = `https://${mirrorSubdomain}.mirrornode.hedera.com/api/v1/accounts/${accountToSign}`;
  const accountInfoResponse = await fetch(accountInfoFetchUrl);
  const jAccountInfo = await accountInfoResponse.json();
  const accountPublicKey = PublicKey.fromString(jAccountInfo.key.key);

  // This region adapts the original HashConnectSigner received from HashConnect to the expected interface by Strato
  // We need to export the provider so that Strato's underlying Wallet can make use of it when query-ing for the receipts
  // This was present in the original HIP-338 Wallet specs
  hcSigner.getProvider = () => {
    return provider;
  };
  hcSigner.getAccountKey = () => {
    return accountPublicKey;
  };

  hcSigner.wipePairingData = () => {
    try {
      const hashConnect = new HashConnect(false);

      localStorage.removeItem(HP_APP_METADATA_STORAGE_KEY);
      localStorage.removeItem(HP_INNER_STORAGE_KEY);
      hashConnect.clearConnectionsAndData();
    } catch (e) {
      console.error(e);
    }
  };

  hcSigner.authenticate = authenticate;
  hcSigner.disconnect = () => {
    try {
      localStorage.removeItem(HP_INNER_STORAGE_KEY);
    } catch (e) {}
  };

  // Overwriting the underlying call method so that
  //   1. returnTransaction is set to 'true'
  //   2. we guard against trying to sign queries (which hashpack does not know how to do)
  hcSigner.call = async <RequestT, ResponseT, OutputT>(
    request: Executable<RequestT, ResponseT, OutputT>
  ) => {
    const transaction = {
      byteArray: getBytesOf(request),
      metadata: {
        accountToSign,
        returnTransaction: true,
      },
      topic,
    };
    const { error, signedTransaction } = await hc.sendTransaction(
      topic,
      transaction
    );

    if (error) {
      throw new Error(`There was an issue while signing the request: ${error}`);
    }

    const sdkSignedTransaction = Transaction.fromBytes(
      signedTransaction as Uint8Array
    );

    return sdkSignedTransaction.execute(
      sdkClient
    ) as unknown as Promise<OutputT>;
  };
  return hcSigner;
}

export class HashPackWallet {
  public static async getConnection(
    debug: boolean = false
  ): Promise<Signer | null> {
    const isHPConnectionStateAvailable =
      localStorage.getItem(HP_INNER_STORAGE_KEY) !== null;

    if (isHPConnectionStateAvailable) {
      const appMetadata = JSON.parse(
        localStorage.getItem(HP_APP_METADATA_STORAGE_KEY)!
      );
      const hashConnect = new HashConnect(debug);

      hashConnect.loadLocalData();
      const hpTopic = hashConnect.hcData.topic;
      const connectedAccountId =
        hashConnect.hcData.pairingData[0].accountIds[0];
      const connectedNetwork = hashConnect.hcData.pairingData[0].network as
        | "testnet"
        | "mainnet"
        | "previewnet";

      await hashConnect.init(appMetadata, connectedNetwork, true);

      const hpProvider = hashConnect.getProvider(
        connectedNetwork,
        hpTopic,
        connectedAccountId
      );

      return getBridgedWallet(hashConnect, hpProvider);
    }
    return null;
  }

  public static async newConnection({
    networkName = "testnet",
    debug = false,
    appMetadata,
  }: {
    networkName: "mainnet" | "testnet" | "previewnet";
    debug: boolean;
    appMetadata: HashConnectTypes.AppMetadata;
  }) {
    const hashConnect = new HashConnect(debug);

    return new Promise((resolve, reject) => {
      hashConnect.pairingEvent.on((data) => {
        const connectedAccountId = data.accountIds[0];
        const hpProvider = hashConnect.getProvider(
          networkName,
          data.topic,
          connectedAccountId
        );

        // Store app-metadata for HashPackWallet.getConnection to work
        localStorage.setItem(
          HP_APP_METADATA_STORAGE_KEY,
          JSON.stringify(appMetadata)
        );

        resolve(getBridgedWallet(hashConnect, hpProvider));
      });
      hashConnect.init(appMetadata, networkName, false).then(() => {
        hashConnect.connectToLocalWallet();
      });
    });
  }

  public static async checkExtensionPresence(debug = false) {
    return new Promise((resolve) => {
      const hashConnect = new HashConnect(debug);

      hashConnect.foundExtensionEvent.once(() => {
        resolve(true);
      });

      setTimeout(() => {
        resolve(false);
      }, HP_WAIT_FOR_EXTENSION_RESPONSE_TIMEOUT);

      hashConnect.findLocalWallets();
    });
  }
}
