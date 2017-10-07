const { LoaderOptionsPlugin } = require('webpack');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { build, entries, html, stylesCss, js } = require('./paths');

const extractCSS = new ExtractTextPlugin('css/[name].css');

const config = {
  entry: [stylesCss, js],
  devtool: 'source-map',
  devServer: {
    contentBase: build
  },
  output: {
    path: build,
    filename: 'js/[name][chunkhash].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: {
          loader: extractCSS.extract('css-loader'),
          options: { name: 'css/[name][hash:8].[ext]' }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'url-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `!!html-loader!${html}`
    }),
    new StylelintWebpackPlugin(),
    extractCSS
  ]
};

module.exports = config;
