/* eslint-env node */

import { join as pathJoin } from "path";

import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const isInDevelopment = process.env.NODE_ENV !== "production";
const extensions = [".js"];

function getPathOf(file) {
  return pathJoin(__dirname, file);
}

export default async function getConfig() {
  return {
    context: "window",
    external: ["bignumber.js"],
    input: "./node_modules/@hashgraph/sdk/src/index.js",
    output: [
      {
        file: getPathOf("../libs/hashgraph-sdk.js"),
        format: "esm",
        plugins: [!isInDevelopment && terser()],
        sourcemap: isInDevelopment,
        paths: {
          "bignumber.js": "https://unpkg.com/bignumber.js@9.0.2/bignumber.mjs",
        },
      },
    ],
    plugins: [
      resolve({
        extensions,
        mainFields: ["browser", "module", "main"],
        preferBuiltins: false,
      }),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: "preferred",
      }),
      nodePolyfills({
        sourceMap: isInDevelopment,
      }),
      json(),
    ],
    treeshake: !isInDevelopment,
  };
}
