const path = require('path');
const inputHandler = require('../tools/inputHandler');

const fileName1 = path.join(__dirname, '/examples/example1.txt');
const fileName2 = path.join(__dirname, '/examples/example2.txt');
const fileName3 = path.join(__dirname, '/examples/example3.txt');
const fileName4 = path.join(__dirname, '/examples/example4.txt');
const fileName5 = path.join(__dirname, '/examples/example5.txt');
const { problem6, problem6Part2 } = require('./index');

test('Problem 6 - Example 1', () => {
  const example = inputHandler(fileName1, '\n');
  expect(problem6(example[0])).toBe(7);
})

test('Problem 6 - Example 2', () => {
  const example = inputHandler(fileName2, '\n');
  expect(problem6(example[0])).toBe(5);
})

test('Problem 6 - Example 3', () => {
  const example = inputHandler(fileName3, '\n');
  expect(problem6(example[0])).toBe(6);
})

test('Problem 6 - Example 4', () => {
  const example = inputHandler(fileName4, '\n');
  expect(problem6(example[0])).toBe(10);
})

test('Problem 6 - Example 5', () => {
  const example = inputHandler(fileName5, '\n');
  expect(problem6(example[0])).toBe(11);
})

test('Problem 6 Part 2 - Example 1', () => {
  const example = inputHandler(fileName1, '\n');
  expect(problem6Part2(example[0])).toBe(19);
})

test('Problem 6 Part 2 - Example 2', () => {
  const example = inputHandler(fileName2, '\n');
  expect(problem6Part2(example[0])).toBe(23);
})

test('Problem 6 Part 3 - Example 3', () => {
  const example = inputHandler(fileName3, '\n');
  expect(problem6Part2(example[0])).toBe(23);
})

test('Problem 6 Part 4 - Example 4', () => {
  const example = inputHandler(fileName4, '\n');
  expect(problem6Part2(example[0])).toBe(29);
})

test('Problem 6 Part 5 - Example 5', () => {
  const example = inputHandler(fileName5, '\n');
  expect(problem6Part2(example[0])).toBe(26);
})