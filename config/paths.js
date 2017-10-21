const { join, resolve } = require("path");
const { realpathSync } = require("fs");

const root = realpathSync(process.cwd());
const resolveRoot = relativePath => resolve(root, relativePath);

module.exports = {
  html: resolveRoot("src/index.html"),
  stylesScss: resolveRoot("src/sass/index.scss"),
  stylesCss: resolveRoot("src/css/styles.css"),
  js: resolveRoot("src/js/scripts.js"),
  build: resolveRoot(".dist"),
  spriteImages: resolveRoot("src/content/icons"),
  spritesmithGenerated: resolveRoot("src/spritesmith-generated"),
  smTarget: resolveRoot("src/spritesmith-generated/sprite.png"),
  smCss: resolveRoot("src/spritesmith-generated/sprite.css"),
  loaders: resolveRoot("config/loaders")
};
