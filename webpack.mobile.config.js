var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {  
  entry: './app/mobileapp.ts',
  output: {
    path: __dirname + "/dist/mobile",
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
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
  }
}