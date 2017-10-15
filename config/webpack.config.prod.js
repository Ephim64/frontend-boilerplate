const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/[name].css');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          puclicPath: '../'
        })
      }
    ]
  }
};
