function calculate(number1, operation, number2) {
    switch(operation){
        case"+":
            return number1+number2;
            break;
        case"-":
            return number1-number2;
            break;
        case"*":
            return number1*number2;
            break;
        case"/":
            return number1/number2;
            break;
    }
  }
  
  module.exports = { calculate };