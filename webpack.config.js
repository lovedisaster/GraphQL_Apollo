const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './apolloClient/app.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server/public/build'),
    publicPath: '/build/'
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new LiveReloadPlugin({port: 3001, hostname: 'localhost'}),
    new HtmlWebpackPlugin()
  ],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
            fullySpecified: false
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test:/\.(png|jpg|ico)$/,
        use:'url-loader' 
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }]
      }]
  }
};