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
    return age >= 18;

}


function getMaxNumbers(numArray) {
    return Math.max.apply(null, numArray);
}




function mulipleFn(number) {
    return number * 5;
}

function getMultiplyFn() {
    return mulipleFn;
}



module.exports = { add, subtract, greeting, isAdult, getMaxNumbers, getMultiplyFn };
