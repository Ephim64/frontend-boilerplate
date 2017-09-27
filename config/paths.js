const { join, resolve } = require('path');

module.exports = {
  html: resolve(process.cwd(), 'src/index.html'),
  build: resolve(process.cwd(), '.dist')
};