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
    publicPath: '',
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
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
          publicPath: '../'
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/img/[name].[ext]'
            }
          }
        ]
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
    /*
    if to add sprite generator (like SpriteSmith) we need to point it to specific folder.
    and after that it will generate a output.
    We need to specify source folder.
    Would SpriteSmith and url-loader conflict?
    Api of SpriteSmith:
      src:{
      cwd - closes common directory for all source images
      glob - glob pattern
    },
    target:{
    image - target image filename
    css - generated styles, based on images in sprite
  }
    */
  ]
};

module.exports = config;
