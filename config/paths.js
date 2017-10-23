const { join, resolve } = require('path');
const { realpathSync } = require('fs');

const root = realpathSync(process.cwd());
const src = join(root, 'src');
const resolveRoot = relativePath => resolve(root, relativePath);
const resolveSrc = relativePath => resolve(src, relativePath);

module.exports = {
  html: resolveSrc('index.html'),
  stylesScss: resolveSrc('sass/index.scss'),
  stylesCss: resolveSrc('css/index.css'),
  js: resolveSrc('js/index.js'),
  jsAn: resolveSrc('js/index.an.js'),
  build: resolveRoot('.dist'),
  spriteImages: resolveSrc('content/icons'),
  spritesmithGenerated: resolveSrc('spritesmith-generated'),
  smTarget: resolveSrc('spritesmith-generated/sprite.png'),
  smCss: resolveSrc('spritesmith-generated/sprite.css'),
  resolveRoot,
  resolveSrc
};
