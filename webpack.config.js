const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  bail: true,
  entry: {
    app: './src/js/app.es6'
  },
  output: {
    path: './dist/',
    filename: 'configurator.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'AMP Configurator'
  })],
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
        test: /(\.es6$)|(\.js$)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        exclude: /node_modules/,        
        query: {
          modules: true,
          localIdentName: '[name]---[local]---[hash:base64:5]'
        }
      }
    ]
  },
  devServer: {
    port: 9244,
    noInfo: false
  }
};
