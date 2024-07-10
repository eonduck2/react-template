const path = require("node:path");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
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
  devtool: "source-map",
};
