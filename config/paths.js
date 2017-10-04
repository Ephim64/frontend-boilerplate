const { join, resolve } = require('path');
const { realpathSync } = require('fs');

const root = realpathSync(process.cwd());
const resolveRoot = (relativePath) => resolve(root, relativePath);

module.exports = {
  html: resolveRoot('src/index.html'),
  stylesScss: resolveRoot('src/styles.scss'),
  stylesCss: resolveRoot('src/stylesc.css'),
  build: resolveRoot('.dist')
};
