require("dotenv").config();

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: isProd ? "hidden-source-map" : "source-map",
  entry: {
    index: {
      import: "./src/index.tsx",
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "/dist"),
  },
  optimization: {
    runtimeChunk: "single",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        options: {
          transpileOnly: isProd ? false : true,
        },
      },
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "style-loader"],
      },
      {
        test: /\.(webp|jpg|png|jpeg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      hash: true,
      favicon: "public/favicon.ico",
    }),
    new LiveReloadPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    host: "localhost",
    port: PORT,
    open: true,
    hot: "only",
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
    devMiddleware: {
      stats: "errors-only",
    },
  },
};
