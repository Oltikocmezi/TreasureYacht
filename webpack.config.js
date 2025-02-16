const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  // Other Webpack configurations...
  plugins: [new BundleAnalyzerPlugin()],
};
