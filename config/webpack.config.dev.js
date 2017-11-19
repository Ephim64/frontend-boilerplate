const { LoaderOptionsPlugin, HotModuleReplacementPlugin } = require('webpack');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const { smart } = require('webpack-merge');

const { build } = require('./paths');
const base = require('./webpack.config.base');
const { build, resolveLoaders } = require('./paths');

const dev = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: build,
    hot: true,
    open: true,
    watchContentBase: true
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
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true }),
    new StylelintWebpackPlugin(),
    new HotModuleReplacementPlugin()
  ]
};

module.exports = smart(base, dev);
