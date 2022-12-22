const path = require('path');
const inputHandler = require('../tools/inputHandler');

const fileName = path.join(__dirname, '/examples/example1.txt');
const { problem2, problem2Part2 } = require('./index');

test('Problem 2 - Example 1', () => {
  const example1 = inputHandler(fileName, '\n');
  const result = problem2(example1);
  expect(result).toBe(15);
});

test('Problem 2 Part 2 - Example 1', () => {
  const example1 = inputHandler(fileName, '\n');
  const result = problem2Part2(example1);
  expect(result).toBe(12);
});
