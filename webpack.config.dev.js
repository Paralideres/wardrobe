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
          'css?modules&localIdentName=[local]'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=[path][name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      }
    ],
  },
  resolve: {
    alias: {
      img: path.join(__dirname, 'src/img'),
      common: path.join(__dirname, 'src/apps/common'),
    }
  }
};
