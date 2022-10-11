const path = require("node:path");

const { ProvidePlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

function bootstrap(webpackConfig) {
  webpackConfig.resolve.fallback = {
    ...webpackConfig.resolve.fallback,
    buffer: require.resolve("buffer/"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
  };

  webpackConfig.plugins.push(
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, "./libs"), to: "static/js" }],
    })
  );
  webpackConfig.externals = {
    "https://unpkg.com/bignumber.js@9.0.2/bignumber.mjs":
      "https://unpkg.com/bignumber.js@9.0.2/bignumber.mjs",
    ...webpackConfig.externals,
  };
}

module.exports = {
  bootstrap,
};
