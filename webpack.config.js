const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // mode: "production",
  entry: path.join(__dirname, "src", "client", "index.tsx"),
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: path.join(__dirname, "dist", "index.html"),
      inject: "body",
    }),
  ],
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
  },
};
