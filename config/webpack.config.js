const { LoaderOptionsPlugin } = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');
const {
  build,
  html,
  styles
} = require('./paths');

const config = {
  entry: {
    'index.html': html,
    styles: styles
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
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new StyleLintWebpackPlugin({
      configFile:'.stylelintrc',
      ignoreDisables: true,
      files: '**/*.css'
      })
  ]
};

module.exports = config;
