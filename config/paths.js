const { join, resolve } = require('path');
const { realpathSync } = require('fs');

const root = realpathSync(process.cwd());
const resolveRoot = relativePath => resolve(root, relativePath);

module.exports = {
  html: resolveRoot('src/index.html'),
  stylesScss: resolveRoot('src/scss/styles.scss'),
  stylesCss: resolveRoot('src/css/styles.css'),
  js: resolveRoot('src/js/scripts.js'),
  build: resolveRoot('.dist'),
  spriteImages: resolveRoot('src/assets/ico'),
  spritesmithGenerated: resolveRoot('src/spritesmith-generated'),
  smTarget: resolveRoot('src/spritesmith-generated/sprite.png'),
  smCss: resolveRoot('src/spritesmith-generated/sprite.scss')
};
