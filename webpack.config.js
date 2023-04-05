const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const prod = process.env.NODE_ENV === "production";

module.exports = {
  mode: prod ? "production" : "development",
  devtool: prod ? false : "eval-source-map",
  entry: {
    app: resolve(__dirname, "src/index"),
  },
  resolve: {
    modules: ["node_modules"],
    mainFiles: ["index"],
    extensions: [".ts", ".tsx", ".js", ".mjs", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "public/index.html",
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin(),
    ...(prod
      ? [
          new MiniCssExtractPlugin({
            filename: "static/css/[name].[fullhash:8].css",
            chunkFilename: "static/css/[name].[fullhash:8].chunk.css",
          }),
        ]
      : []),
  ],
  optimization: {
    minimize: prod,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        terserOptions: {
          safari10: true,
        },
      }),
    ],
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "static/js/[name].[fullhash:8].js",
    chunkFilename: "static/js/[name].[fullhash:8].chunk.js",
  },
};
