/* eslint-disable */
var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var appsConfig = require('./webpack/apps');

module.exports = {
  devtool: 'eval-cheap-sourcemap',
  entry: appsConfig.entryConfig,
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]/[name].bundle.js',
    publicPath: '/static/',
  },
  plugins: _.concat(
    [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      new webpack.optimize.DedupePlugin()
    ],
    // Generate the HTML pages
    appsConfig.htmlPluginConfig.map(config => new HtmlWebpackPlugin(config))
  ),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      }
    ],
  },
};
