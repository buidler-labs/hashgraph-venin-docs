// see https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
import React from "react";

export const StratoContext = React.createContext({});

export default function Root({ children }) {
  const [bundledWalletInfo, setBundledWalletInfo] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);
  const [Bridges, setBridges] = React.useState(null);
  const [Strato, setStrato] = React.useState(null);

  React.useEffect(() => {
    import(
      /* webpackIgnore: true */
      "/js/hedera-strato-js.js"
    ).then((Strato) => {
      setStrato(Strato);
      Strato.ApiSession.default().then(({ session }) => {
        setBundledWalletInfo({
          network: session.network.name,
          accountId: session.client.wallet.accountId.toString(),
        });
      });
    });
    import(
      /* webpackIgnore: true */
      "/js/hedera-wallet-bridges.js"
    ).then((Bridges) => {
      setBridges(Bridges);
    });
  }, []);

  const ctxValue = React.useMemo(
    () => ({ bundledWalletInfo, Bridges, Strato }),
    [bundledWalletInfo, Bridges, Strato]
  );

  return (
    <StratoContext.Provider value={ctxValue}>{children}</StratoContext.Provider>
  );
}
