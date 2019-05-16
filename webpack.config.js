var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src", "index.tsx"),

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000
  }
};
