const { LoaderOptionsPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { build, entries, html, stylesCss, js } = require('./paths');

const extractCSS = new ExtractTextPlugin('css/[name].css');

const config = {
  entry: [stylesCss, js],
  devtool: 'source-map',
  output: {
    path: build,
    publicPath: '',
    filename: 'js/[name][chunkhash].js'
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
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: false }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `!!html-loader!${html}`
    }),
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
