const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/app.ts',
  output: {
    path: __dirname + "/dist/web",
    filename: 'bundle.[hash].js'
  },
  devtool: 'eval',
  optimization: {
      minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
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
