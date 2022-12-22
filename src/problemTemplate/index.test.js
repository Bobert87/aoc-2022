const path = require('path');
const inputHandler = require('../tools/inputHandler');

const fileName = path.join(__dirname, '/examples/example1.txt');
const { problem3 } = require('./index');

test('Problem 1 - Example 1', () => {
  const example1 = inputHandler(fileName, '\n');
  expect(problem3(example1)).toBe(10);
})