// (function (exports, require, module, __filename, __dirname) {
import chalk from 'chalk';
import assert from 'assert';
import { sum } from '../src/my-maths';

try {
  assert.strictEqual(sum(1, 2), 3, 'myMaths.sum(1, 2)');
  assert.strictEqual(sum('1', '2'), 3, "myMaths.sum('1', '2')");
  console.log(chalk.green('Tests succeed'));
}
catch (err) {
  console.log(chalk.red('Tests failed'));
  console.log(err.message);
}
// });
