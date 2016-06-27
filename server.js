/* eslint-disable*/
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(7000, 'localhost', function (err) {
  if (err) {
    console.error(err);
  }

  console.log('Listening at http://localhost:7000/');
});
