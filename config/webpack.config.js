const { LoaderOptionsPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
  build,
  html,
} = require('./paths');

const extractHTML = new ExtractTextPlugin('[name].html');

const config = {
  entry: {
    index: html
  },
  devtool: 'source-map',
  output: {
    path: build,
    filename: '[name].[chunkhash].bundl.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        enforce: 'pre',
        use: {
          loader: 'htmllint-loader'
        }
      },
      {
        test: /\.(html)$/,
        use: extractHTML.extract(['html-loader'])
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true }),
    new CleanWebpackPlugin(build),
    extractHTML
  ]
};

module.exports = config;
