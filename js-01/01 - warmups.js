const add = (number1, number2) => {
    return number1 + number2;
};

const subtract = (number1, number2) => {
    return number1 - number2;
};

const greeting = name => {
    return `Hello ${name}`;
};

const isAdult = age => {
    return age > 18;
};

const getMaxNumbers = numbers => {
    return Math.max(...numbers);
};

const multipyFn = number => {
    return number * 5;
};

const getMultiplyFn = () => {
    return multipyFn;
};

module.exports = { add, subtract, greeting, isAdult, getMaxNumbers, getMultiplyFn }