const { join, resolve } = require('path');
const { realpathSync } = require('fs');

const root = realpathSync(process.cwd());
const resolveRoot = relativePath => resolve(root, relativePath);

module.exports = {
  html: resolveRoot('src/index.html'),
  stylesScss: resolveRoot('src/css/styles.scss'),
  stylesCss: resolveRoot('src/css/styles.css'),
  js: resolveRoot('src/js/scripts.js'),
  build: resolveRoot('.dist'),
  entries: [
    // resolveRoot('src/index.html'),
    // resolveRoot('src/styles.scss'),
    resolveRoot('src/stylesc.css')
  ]
};
