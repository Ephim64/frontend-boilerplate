const { smart } = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require('./webpack.config.base');

const extractCSS = new ExtractTextPlugin('css/[name].css');

const prod = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '../'
        })
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        })
      }
    ]
  },
  plugins: [extractCSS]
};

const config = smart(base, prod);
module.exports = config;
