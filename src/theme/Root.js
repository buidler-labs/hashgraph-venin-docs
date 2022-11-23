// see https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
import React from "react";

export const VeninContext = React.createContext({});

export default function Root({ children }) {
  const [bundledWalletInfo, setBundledWalletInfo] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);
  const [Bridges, setBridges] = React.useState(null);
  const [Venin, setVenin] = React.useState(null);

  React.useEffect(() => {
    import(
      /* webpackIgnore: true */
      "/js/hedera-venin-js.js"
    ).then((Venin) => {
      setVenin(Venin);
      Venin.ApiSession.default().then(({ session }) => {
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
    () => ({ bundledWalletInfo, Bridges, Venin }),
    [bundledWalletInfo, Bridges, Venin]
  );

  return (
    <VeninContext.Provider value={ctxValue}>{children}</VeninContext.Provider>
  );
}
