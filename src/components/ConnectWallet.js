/* eslint-env browser */

import "./ConnectWallet.style.css";
import React from "react";
import { VeninContext } from "../theme/Root";

const appMetadata = {
  description: "Hashgraph Venin Documentation",
  icon: "https://www.hashpack.app/img/logo.svg",
  name: "hVenin",
};

export const HeadStarterConnectWallet = () => {
  const trySettingWallet = (wallet) => {
    if (!wallet) return;

    const fetchBalance = async () => {
      const _balance = await wallet.getAccountBalance();
      return _balance && _balance.hbars;
    };

    window["hedera"] = wallet;
    setWallet(wallet);
    fetchBalance().then((bal) => {
      setBalance(bal.toString());
    });
  };

  const { Bridges } = React.useContext(VeninContext);
  const [balance, setBalance] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);

  const onConnectClicked = async () => {
    Bridges.HashPackWallet.newConnection({
      networkName: "testnet",
      debug: false,
      appMetadata,
    }).then((wConn) => {
      trySettingWallet(wConn);
    });
  };

  const onDisconnectClicked = () => {
    wallet.disconnect();
    setBalance(null);
    setWallet(null);
  };

  React.useEffect(() => {
    if (!Bridges) return;

    Bridges.HashPackWallet.getConnection(false).then((wConn) => {
      if (wConn !== null) {
        trySettingWallet(wConn);
      }
    });
  }, [Bridges]);

  return (
    <center style={{ margin: "16px" }}>
      {wallet ? (
        <ConnectedStats
          accountId={wallet.getAccountId().toString() || ""}
          balance={balance}
          onDisconnect={onDisconnectClicked}
        />
      ) : (
        <button
          className={
            Bridges ? "wallet-connect connect" : "wallet-connect loading"
          }
          enabled={Bridges != null}
          onClick={onConnectClicked}
        >
          {Bridges ? "CONNECT WALLET" : "Loading"}
        </button>
      )}
    </center>
  );
};

const ConnectedStats = ({ accountId, balance, onDisconnect }) => {
  return (
    <div className="connected-stats">
      <div className="info">
        <span className="id">{accountId}</span>
        <span className="balance">{balance ? balance : "-"}</span>
      </div>
      <button className="wallet-connect disconnect" onClick={onDisconnect}>
        Disconnect
      </button>
    </div>
  );
};
