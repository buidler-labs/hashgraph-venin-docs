/* eslint-env browser */

import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

import { VeninContext } from "../theme/Root";

export const OperatorId = () => {
  const { bundledWalletInfo } = React.useContext(VeninContext);

  return (
    <BrowserOnly fallback={<code>unknown</code>}>
      {() =>
        bundledWalletInfo ? (
          <a
            href={`https://hashscan.io/#/${bundledWalletInfo.network}/account/${bundledWalletInfo.accountId}`}
          >
            <code>{bundledWalletInfo.accountId}</code>
          </a>
        ) : (
          <code>unknown</code>
        )
      }
    </BrowserOnly>
  );
};

export const OperatorNetwork = () => {
  const { bundledWalletInfo } = React.useContext(VeninContext);

  return (
    <BrowserOnly fallback={<code>unknown</code>}>
      {() => (
        <code>{bundledWalletInfo ? bundledWalletInfo.network : "unknown"}</code>
      )}
    </BrowserOnly>
  );
};
