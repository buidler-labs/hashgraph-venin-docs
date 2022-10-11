/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const stratoLibInfo = require("./crypto/node_modules/@buidlerlabs/hedera-strato-js/package.json");
const remarkMermaid = require("mdx-mermaid");
const remarkNpm2Yarn = require("@docusaurus/remark-plugin-npm2yarn");
const remarkNumberedFootnoteLabels = require("remark-numbered-footnote-labels");
const { bootstrap: bootstrapWebConfigForCrypto } = require("./crypto");

module.exports = async function () {
  const remarkGfm = (await import("remark-gfm")).default;

  return {
    baseUrl: "/",
    deploymentBranch: "main",
    organizationName: "buidler-labs",
    plugins: [
      [
        "@cmfcmf/docusaurus-search-local",
        {
          indexBlog: false,
        },
      ],
      "@docusaurus/theme-live-codeblock",
      async function CryptoLibs(context, options) {
        return {
          name: "crypto-libs",
          configureWebpack(config, isServer, utils, content) {
            return bootstrapWebConfigForCrypto(config);
          },
        };
      },
    ],
    presets: [
      [
        "classic",
        {
          blog: false,
          docs: {
            editUrl:
              "https://github.com/buidler-labs/hedera-strato-docs/edit/main/",
            exclude: ["**/src/**"],
            path: "src.docs",
            remarkPlugins: [
              remarkGfm,
              remarkMermaid,
              [remarkNpm2Yarn, { sync: true }],
              remarkNumberedFootnoteLabels,
            ],
            routeBasePath: "/",
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            sidebarPath: "sidebar.js",
          },
          gtag: {
            anonymizeIP: true,
            trackingID: "G-ZHBJ3QTDC9",
          },
          theme: {
            customCss: [require.resolve("./static/css/theme.css")],
          },
        },
      ],
    ],
    projectName: "hedera-strato-js",
    staticDirectories: ["static"],
    tagline: "Write Hedera dApps like a boss because why not?",
    themeConfig: {
      footer: {
        copyright: `
        🔌 by <a href='https://www.npmjs.com/package/@buidlerlabs/hedera-strato-js/v/${
          stratoLibInfo.version
        }'>Strato v${
          stratoLibInfo.version
        }</a>, 🛠️ with ❤️ in <a href='https://docusaurus.io/'>Docusaurus</a></br>
          ©️ ${new Date().getFullYear()} <a href='https://github.com/buidler-labs'>Buidler Labs</a>
        `,
        logo: {
          alt: "Buidler Labs Logo",
          href: "https://buidlerlabs.com/",
          src: "img/logos/buidler-labs.png",
          width: 169,
        },
        style: "dark",
      },
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
      navbar: {
        items: [
          {
            href: "/",
            label: "Hedera Strato JS",
            position: "left",
          },
          {
            "aria-label": "GitHub repository",
            className: "header-github-link",
            href: "https://github.com/buidler-labs/hedera-strato-js",
            position: "right",
          },
        ],
      },
      prism: {
        additionalLanguages: ["solidity"],
      },
    },
    title: "Hedera Strato JS",
    url: "https://hsj-docs.buidlerlabs.com/",
  };
};
