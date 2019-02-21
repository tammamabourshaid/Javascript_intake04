function add(number1,number2){
    return number1+number2;
}
function subtract(number1,number2){
    return number1-number2;
}

function greeting(name){
    return "Hello " + name;
}

function isAdult(age){
    return age >=18;
}

function getMaxNumbers(numArray){
    return Math.max.apply(null,numArray);
}


function mulipleFn(number) {
    return number * 5;
 }
 
 function getMultiplyFn() {
    return mulipleFn;
 }
 //it("should return a function that multiplies its parameter by 5", () => {
    const multiplyFn = getMultiplyFn();
    expect(multiplyFn(2)).toBe(10);
  ;

module.exports = {add,subtract,greeting,isAdult,getMaxNumbers,getMultiplyFn};