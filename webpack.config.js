'use strict';

module.exports = {
  entry: [
    'babel-polyfill',
    './browser/react/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};