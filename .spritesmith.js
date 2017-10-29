module.exports = {
  src: './src/content/icons/**/!(sprite).{png,git,jpg}',
  destImage: './src/content/icons/sprite.png',
  destCSS: './src/sass/sprite.scss',
  cssOpts: {
    cssClass: item => `.i-${item.name}`
  }
}
