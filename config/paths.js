const { join, resolve, relative } = require('path');
const { realpathSync } = require('fs');

const rootPath = realpathSync(process.cwd());
const src = join(rootPath, 'src');
const loaders = join(rootPath, 'config', 'loaders');
const resolveRoot = relativePath => resolve(rootPath, relativePath);
const relativeRoot = relativePath => relative(rootPath, relativePath);
const resolveSrc = relativePath => resolve(src, relativePath);
const resolveLoaders = relativePath => resolve(loaders, relativePath);

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
  relativeRoot,
  resolveSrc,
  resolveLoaders
};
