const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    scout: './src/scout.js',
    // app: './src/app/index.jsx',
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  output: {
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]webpack[\\/]/,
          chunks: "initial",
          minChunks: Infinity,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["vendor", "scout"]
    }),
    // Uncomment this in if you want a cool report on our dependency tree
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
};