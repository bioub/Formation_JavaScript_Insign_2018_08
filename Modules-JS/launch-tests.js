const { readdirSync } = require('fs');

readdirSync(__dirname + '/common-js/test')
  .filter((fileName) => fileName.endsWith('.test.js'))
  .forEach((fileName) => require('./common-js/test/' + fileName));
