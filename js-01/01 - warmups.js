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
function getMaxNumbers(number){
    return number==9 || number==-1;
}

module.exports = { add, subtract, greeting, isAdult,getMaxNumbers };


