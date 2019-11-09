var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {  
  entry: './app/mobileapp.ts',
  output: {
    path: __dirname + "/dist/mobile",
    filename: 'bundle.[hash].js'
  },
  devtool: 'source-map',
  plugins: [
      new webpack.optimize.UglifyJsPlugin(),

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