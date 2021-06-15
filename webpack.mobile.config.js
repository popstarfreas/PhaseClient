const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {  
  entry: './app/mobileapp.ts',
  output: {
    path: __dirname + "/dist/mobile",
    filename: 'bundle.[hash].js'
  },
  devtool: 'source-map',
  optimization: {
      minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/mobile.html'
    }),
    new CopyPlugin({
        patterns: [
            { from: "app/stylesheets", to: "stylesheets" },
            { from: "app/fonts", to: "fonts" },
        ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {allowTsInNodeModules: true}
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      "app/node_modules"
    ],
    extensions: [".ts", ".js", ".json"]
  }
}
