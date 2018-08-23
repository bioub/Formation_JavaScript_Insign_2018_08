// (function (exports, require, module, __filename, __dirname) {
'use strict';

const chalk = require('chalk'); // node_modules/chalk
const assert = require('assert'); // dans le binaire de Node
const myMaths = require('../src/my-maths'); // inclure un fichier qu'on a créé (tjs ./ ou ../)

try {
  assert.strictEqual(myMaths.sum(1, 2), 3, 'myMaths.sum(1, 2)');
  assert.strictEqual(myMaths.sum('1', '2'), 3, "myMaths.sum('1', '2')");
  console.log(chalk.green('Tests succeed'));
}
catch (err) {
  console.log(chalk.red('Tests failed'));
  console.log(err.message);
}
// });
