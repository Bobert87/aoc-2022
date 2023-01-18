const path = require('path');
const inputHandler = require('../tools/inputHandler');

const fileName = path.join(__dirname, '/examples/example1.txt');
const fileName2 = path.join(__dirname, '/examples/example2.txt');
const { problem8, problem8Part2 } = require('./index');

test('Problem 8 - Example 1', () => {
  const example = inputHandler(fileName, '\n');
  expect(problem8(example)).toBe(21);
})

test('Problem 8 - Example 2', () => {
  const example = inputHandler(fileName, '\n');
  expect(problem8Part2(example)).toBe(8);
})