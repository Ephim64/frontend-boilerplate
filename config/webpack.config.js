const { LoaderOptionsPlugin } = require('webpack');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { build, entries, html, stylesCss } = require('./paths');

const extractHTML = new ExtractTextPlugin('[name].html');
const extractCSS = new ExtractTextPlugin('[name].css');

const config = {
  entry: entries,
  // entry: {
  //   html,
  //   assets: entries
  // },
  devtool: 'source-map',
  output: {
    path: build,
    filename: '[name].[chunkhash].bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader'
          'htmllint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'file-loader?name=[name].[ext]',
          'style-loader',
          'extract-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000 //What is the limit for loading as data-url?
        }
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // template: `!!html-loader!htmllint-loader!${html}`
      template: html
    }),
    new StylelintWebpackPlugin()
  ]
};

module.exports = config;
