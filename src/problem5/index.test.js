const path = require('path');
const inputHandler = require('../tools/inputHandler');

const fileName = path.join(__dirname, '/examples/example1.txt');
const { problem5, problem5Part2 } = require('./index');

test('Problem 5 - Example 1', () => {
  const example1 = inputHandler(fileName, '\n');
  expect(problem5(example1)).toBe('CMZ');
})

test('Problem 5 - Part 2', () => {
  const example1 = inputHandler(fileName, '\n');
  expect(problem5Part2(example1)).toBe('MCD');
})