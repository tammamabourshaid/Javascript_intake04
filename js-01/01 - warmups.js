const add = (number1, number2) => {
    return number1 + number2;
};

const subtract = (number1, number2) => {
    return number1 - number2;
};

const greeting = (name) => {
    return `Hello ${name}`;
};

const isAdult = (age) => {
    return age >= 18;
};

function getMaxNumbers(numbers) {
    return Math.max(...numbers);
}

function multiplyFn(number){
    return number * 5;
}
function getMultiplyFn(){
    return multiplyFn;
}

module.exports={add, subtract, greeting, isAdult, getMaxNumbers, getMultiplyFn};
