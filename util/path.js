const path = require('path');
const { fileURLToPath } = require('url');
const { dirname } = require('path');

module.exports = dirname(fileURLToPath(import.meta.url));