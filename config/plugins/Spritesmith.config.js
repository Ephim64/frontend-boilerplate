const { resolve, join } = require('path');
const SpriteSmith = require('webpack-spritesmith');
const { spriteImages, smCss, smTarget } = require('../paths');

module.exports = new SpriteSmith({
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
