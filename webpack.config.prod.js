/* eslint-disable */
var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var appsConfig = require('./webpack/apps');

module.exports = {
  devtool: 'sourcemap',
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
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],
    // CSS Extract,
    new ExtractTextPlugin("[name]/[name].css")
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
          'css?modules&localIdentName=[name]_[local]__[hash:base64:5]',
          'postcss'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?name=[path][name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader?' + JSON.stringify({
          name: '[name]_[hash]'
        })
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
