const { LoaderOptionsPlugin } = require('webpack');
const {
  build,
  html,
} = require('./paths');

const config = {
  entry: {
    'index.html': html
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
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true })
  ]
};

module.exports = config;