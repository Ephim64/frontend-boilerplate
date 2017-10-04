const { LoaderOptionsPlugin } = require('webpack');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const {
  build,
  html,
  stylesCss
} = require('./paths');

const config = {
  entry: {
    'index.html': html,
    styles: stylesCss
  },
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
        enforce: 'pre',
        use: {
          loader: 'htmllint-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
    new StylelintWebpackPlugin()
  ]
};

module.exports = config;
