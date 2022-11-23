/* eslint-env node */

import { join as pathJoin } from "path";

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import nodePolyfills from "rollup-plugin-node-polyfills";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";

const isInDevelopment = process.env.NODE_ENV !== "production";

function getPathOf(file) {
  return pathJoin(__dirname, file);
}

export default async function getConfig() {
  return {
    context: "window",
    external: ["@hashgraph/sdk"],
    input: "./src/wallet.ts",
    output: [
      {
        file: getPathOf("../libs/hedera-wallet-bridges.js"),
        format: "esm",
        paths: {
          "@hashgraph/sdk": "./hashgraph-sdk.js",
        },
        plugins: [!isInDevelopment && terser()],
        sourcemap: isInDevelopment,
      },
    ],
    plugins: [
      resolve({
        extensions: [".ts"],
        mainFields: ["browser", "module", "main"],
        preferBuiltins: false,
        rootDir: getPathOf("."),
      }),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: "preferred",
      }),
      replace({
        "global.Buffer = global.Buffer || require('buffer').Buffer;": "",
        'console.log("process", e);': "",
        delimiters: ["", ""],
      }),
      nodePolyfills({
        sourceMap: isInDevelopment,
      }),
      babel({
        babelHelpers: "runtime",
        extensions: [".ts"],
        plugins: [["@babel/plugin-transform-runtime", { regenerator: true }]],
        presets: [
          ["@babel/env", { targets: "> 0.25%, not dead" }],
          ["@babel/typescript"],
        ],
      }),
    ],
    treeshake: !isInDevelopment,
  };
}
