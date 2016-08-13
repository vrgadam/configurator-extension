const path = require('path');
var webpack = require('webpack');

module.exports = {
  bail: true,
  entry: {
    app: './src/js/app.es6'
  },
  output: {
    path: './dist/',
    filename: 'configurator.js'
  },
  plugins: [],
  module: {
    preLoaders: [
      {
        test: /(\.es6$)|(\.js$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        exclude: /node_modules/,
        test: /main.less$/,
        loader: 'style!css!less'
      },
      {
        exclude: /node_modules/,
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  devServer: {
    port: 9244,
    noInfo: false
  }
};
