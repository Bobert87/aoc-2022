const { problem1, problem1Part2 } = require('./src/problem1');
const { problem2, problem2Part2 } = require('./src/problem2');
const { problem3, problem3Part2 } = require('./src/problem3');
const { problem4, problem4Part2 } = require('./src/problem4');
const { problem5, problem5Part2 } = require('./src/problem5');
const { problem6, problem6Part2 } = require('./src/problem6');
const { problem7, problem7Part2 } = require('./src/problem7');
const { problem8, problem8Part2 } = require('./src/problem8');
const inputHandler = require('./src/tools/inputHandler');

const p1 = inputHandler('./src/problem1/input/input.txt', '\n')
console.log(`Problem 1`)
console.log(problem1(p1));
console.log(problem1Part2(p1));

const p2 = inputHandler('./src/problem2/input/input.txt', '\n')
console.log(`Problem 2`)
console.log(problem2(p2));
console.log(problem2Part2(p2));

const p3 = inputHandler('./src/problem3/input/input.txt', '\n')
console.log(`Problem 3`)
console.log(problem3(p3));
console.log(problem3Part2(p3));

const p4 = inputHandler('./src/problem4/input/input.txt', '\n')
console.log(`Problem 4`)
console.log(problem4(p4));
console.log(problem4Part2(p4));

const p5 = inputHandler('./src/problem5/input/input.txt', '\n')
console.log(`Problem 5`)
console.log(problem5(p5));
console.log(problem5Part2(p5));

const p6 = inputHandler('./src/problem6/input/input.txt', '\n')
console.log(`Problem 6`)
console.log(problem6(p6[0]));
console.log(problem6Part2(p6[0]));

const p7 = inputHandler('./src/problem7/input/input.txt', '\n')
console.log(`Problem 7`)
console.log(problem7(p7));
console.log(problem7Part2(p7));

const p8 = inputHandler('./src/problem8/input/input.txt', '\n')
console.log(`Problem 8`)
console.log(problem8(p8));
console.log(problem8Part2(p8));

 