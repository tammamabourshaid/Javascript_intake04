// add
function add(number1, number2){
    return number1 + number2;
}
// subtract
function subtract(number1, number2){
    return number1 - number2;
}
//greeting
function greeting(name){
    return "Hello " + name;
}
//identify as an adult
function isAdult(age){
    return age >= 18;
}
//get the biggest number
function getMaxNumbers(numbers){
    let biggest = numbers[0]; 
    for (let position = 1; position < numbers.length; position++) {
       let comparable = numbers[position];
 
       if (biggest < comparable){
           biggest = comparable;
       }
   }
   return biggest;  
} 
//returns a function that can multuply by 5
function getMultiplyFn(){
 return function (number) {
     return number * 5;
    }
}

module.exports = {add, subtract, greeting, isAdult, getMaxNumbers, getMultiplyFn};