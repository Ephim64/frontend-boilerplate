const { smart } = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteSmith = require('./plugins/SpriteSmith.config');
const base = require('./webpack.config.base');

const extractCSS = new ExtractTextPlugin('css/[name].css');

const prod = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '../'
        })
      }
    ]
  },
  plugins: [extractCSS, SpriteSmith]
};

const config = smart(base, prod);
module.exports = config;
