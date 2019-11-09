const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {  
  entry: './app/app.ts',
  output: {
    path: __dirname + "/dist/web",
    filename: 'bundle.[hash].js'
  },
  devtool: 'eval',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
      }),

    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      "app/node_modules"
    ],
    extensions: [".ts", ".js", ".json"]
  }
}