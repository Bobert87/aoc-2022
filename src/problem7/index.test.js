const path = require('path');
const inputHandler = require('../tools/inputHandler');

const fileName = path.join(__dirname, '/examples/example1.txt');
const { problem7, problem7Part2 } = require('./index');

test('Problem 7 - Example 1', () => {
  const example = inputHandler(fileName, '\n');
  expect(problem7(example)).toBe(95437);
})

test('Problem 7 Part 2- Example 1', () => {
  const example = inputHandler(fileName, '\n');
  expect(problem7Part2(example)).toBe(24933642);
})