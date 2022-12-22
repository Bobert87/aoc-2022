const path = require('path');
const inputHandler = require('../tools/inputHandler');

const fileName = path.join(__dirname, '/examples/example1.txt');
const { problem4, problem4Part2 } = require('./index');

test('Problem 4 - Example 1', () => {
  const example1 = inputHandler(fileName, '\n');
  expect(problem4(example1)).toBe(2);
})

test('Problem 4 - Part 2', () => {
  const example1 = inputHandler(fileName, '\n');
  expect(problem4Part2(example1)).toBe(4);
})