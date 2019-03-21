const add = (number1, number2) => number1 + number2;

const subtract = (number1, number2) => number1 - number2;

const greeting = name => `Hello ${name}`;

const isAdult = age => age > 18;

const getMaxNumbers = numbers => Math.max(...numbers);

const multipyFn = number => number * 5;

const getMultiplyFn = () => multipyFn;

module.exports = { add, subtract, greeting, isAdult, getMaxNumbers, getMultiplyFn };