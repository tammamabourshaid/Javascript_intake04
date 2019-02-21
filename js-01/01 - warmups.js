function add(number1,number2){
    return number1+number2;
}

function subtract(number1,number2){
return number1-number2;
}

function greeting(name){
    return "Hello "+name;
}
function isAdult(age){

    if(age>=10&&age<20)
    return false;
    else
if (age>=20) 
    return true;

}

function getMaxNumbers(numArray){
    return Math.max.apply(null,numArray);
}

function multiplyFn(number){
    return number * 5;
}

function getMultiplyFn() {
    return multiplyFn;
}
module.exports={add,subtract,greeting,isAdult,getMaxNumbers,getMultiplyFn};