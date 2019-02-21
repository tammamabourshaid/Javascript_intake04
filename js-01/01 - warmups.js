function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function greeting(name) {
    return "Hello " + name;
}

function isAdult(number) {
    return number > 18;
}
function getMaxNumbers(numbers){
    return Math.max.apply(null,numbers);
}
function mulipleFn(number) {
    return number * 5;
  }
  
  function getMultiplyFn() {
    return mulipleFn;
  }

module.exports = { add, subtract, greeting, isAdult,getMaxNumbers,getMultiplyFn };


