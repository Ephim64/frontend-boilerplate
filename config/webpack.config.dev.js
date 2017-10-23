const { LoaderOptionsPlugin } = require('webpack');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const { smart } = require('webpack-merge');
const base = require('./webpack.config.base');

const dev = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: build
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
        use: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true }),
    new StylelintWebpackPlugin()
  ]
};

module.exports = smart(base, dev);
