/* eslint-env node */
import { join as pathJoin, dirname } from "path";
import { fileURLToPath } from "url";

import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import venin from "@buidlerlabs/rollup-plugin-hedera-venin";

import dotenv from "dotenv";
dotenv.config();

// Make sure we use the contracts defined for this bundle
process.env.HEDERAS_CONTRACTS_RELATIVE_PATH = "../contracts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const isInDevelopment = process.env.NODE_ENV !== "production";

function getPathOf(file) {
  return pathJoin(__dirname, file);
}

export default async function getConfig() {
  return {
    context: "window",
    external: ["@hashgraph/sdk"],
    input: "./node_modules/@buidlerlabs/hedera-venin-js/lib.esm/index.mjs",
    output: [
      {
        file: getPathOf("../libs/hedera-venin-js.js"),
        format: "esm",
        paths: {
          "@hashgraph/sdk": "./hashgraph-sdk.js",
        },
        plugins: [!isInDevelopment && terser()],
        sourcemap: isInDevelopment,
      },
    ],
    plugins: [
      venin({
        contracts: {
          path: "../contracts",
        },
        includeCompiler: true,
        sourceMap: isInDevelopment,
      }),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: "auto",
      }),
      resolve({
        mainFields: ["browser", "module", "main"],
        preferBuiltins: false,
      }),
      nodePolyfills({
        sourceMap: isInDevelopment,
      }),
      json(),
    ],
    treeshake: !isInDevelopment,
  };
}
