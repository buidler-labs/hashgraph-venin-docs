/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const veninLibInfo = require("./crypto/node_modules/@buidlerlabs/hashgraph-venin-js/package.json");
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
              "https://github.com/buidler-labs/hashgraph-venin-docs/edit/main/",
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
    projectName: "hashgraph-venin-js",
    staticDirectories: ["static"],
    tagline: "Write Hedera dApps like a boss because why not?",
    themeConfig: {
      footer: {
        copyright: `
        🔌 by <a href='https://www.npmjs.com/package/@buidlerlabs/hashgraph-venin-js/v/${
          veninLibInfo.version
        }'>venin v${
          veninLibInfo.version
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
            label: "Hashgraph Venin JS",
            position: "left",
          },
          {
            "aria-label": "GitHub repository",
            className: "header-github-link",
            href: "https://github.com/buidler-labs/hashgraph-venin-js",
            position: "right",
          },
        ],
      },
      prism: {
        additionalLanguages: ["solidity"],
      },
    },
    title: "Hashgraph Venin JS",
    url: "https://venin.buidlerlabs.com/",
  };
};
