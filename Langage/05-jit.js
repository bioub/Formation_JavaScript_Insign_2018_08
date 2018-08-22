
const sum = (a, b) => a + b;

console.time('sum');
sum(1, 2);
console.timeEnd('sum');

console.time('sum');
sum(1, 2); // optimize
console.timeEnd('sum');

console.time('sum');
sum(1, 2); // optimize
console.timeEnd('sum');

console.time('sum');
sum(1, 2); // optimize
console.timeEnd('sum');

console.time('sum');
sum(1, 2);
console.timeEnd('sum');

console.time('sum');
sum(1, 2);
console.timeEnd('sum');

console.time('sum');
sum(1, 2);
console.timeEnd('sum');

console.time('sum');
sum(1, 2);
console.timeEnd('sum');

console.time('sum');
sum(1, '2'); // deoptimize
console.timeEnd('sum');

console.time('sum');
sum(1, 2); // optimize
console.timeEnd('sum');

console.time('sum');
sum(1, 2);
console.timeEnd('sum');
