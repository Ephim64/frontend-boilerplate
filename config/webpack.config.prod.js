const { smart } = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require('./webpack.config.base');
const SpriteSmith = require('webpack-spritesmith');
const { spriteImages, smCss, smTarget } = require('./paths');

const extractCSS = new ExtractTextPlugin('css/[name].css');
const spriteSmith = new SpriteSmith({
  src: {
    cwd: spriteImages,
    glob: '*.png'
  },
  target: {
    image: smTarget,
    css: smCss
  },
  apiOptions: {
    cssImageRef: '~sprite.png'
  }
});

const prod = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '../'
        })
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        })
      }
    ]
  },
  plugins: [extractCSS, spriteSmith]
};

const config = smart(base, prod);
module.exports = config;
