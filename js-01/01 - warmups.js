function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function greeting(msg) {
  return "Hello " + msg;
}

function isAdult(age) {
  return age > 18;
}

function getMaxNumbers(numbers) {
  return Math.max.apply(null, numbers)
}

function multiplyFn(number) {
  return number * 5;
}

function getMultiplyFn() {
  return multiplyFn;
}

module.exports = {
  add,
  subtract,
  greeting,
  isAdult,
  getMaxNumbers,
  getMultiplyFn
};