const { join, resolve } = require('path');

module.exports = {
  html: resolve(process.cwd(), 'src/index.html'),
  styles: resolve(process.cwd(), 'src/styles.css'),
  build: resolve(process.cwd(), '.dist')
};