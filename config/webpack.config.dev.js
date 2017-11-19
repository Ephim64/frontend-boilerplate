const { LoaderOptionsPlugin } = require('webpack');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const { smart } = require('webpack-merge');
const base = require('./webpack.config.base');
const { build, resolveLoaders } = require('./paths');

const dev = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: build
  },
  resolveLoader: {
    alias:{
      'sasslint-loader': resolveLoaders('sasslint-loader')
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'htmllint-loader',
            options: {
              failOnError: false,
              failOnWarning: false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader',
          options: {
            failOnError: false,
            faileOnWarning: false
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap',
          'sasslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true }),
    new StylelintWebpackPlugin()
  ]
};

module.exports = smart(base, dev);
