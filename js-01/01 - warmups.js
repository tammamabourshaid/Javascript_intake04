function add(number1, number2){
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function greeting(name){
    return "Hello " + name;
}

function isAdult(age){
    if (age >17) {return true}
    else {return false}
}

function getMaxNumbers(numbers){
    return Math.max(...numbers)
}

function multiplyFn(eini){
  return eini*5
}
function getMultiplyFn(){
  return multiplyFn;
}


module.exports = {add, greeting, subtract, isAdult, getMaxNumbers, getMultiplyFn};

