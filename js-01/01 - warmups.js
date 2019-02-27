function add(number1, number2) {
    return number1 + number2;
}


function subtract(number1, number2) {
    return number1 - number2;
}

function greeting(name) {
    return "Hello " + name;
}

function isAdult(age) {
    return age > 10;
}

function getMaxNumbers(number) {
    return Math.max.apply(null, number);
}

function multiplyFn(number) {
    return number * 5;
}

function getMultiplyFn() {
    return multiplyFn;
}
module.exports =
    { subtract, add, greeting, isAdult, getMaxNumbers, multiplyFn, getMultiplyFn };