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
}

function getMaxNumbers(numbers[]){
    
    if (age >17) {return true}
}

it("should get the maximum number of an array of numbers", () =>
    expect(getMaxNumbers([5, 9, 1, 8, 2, 4])).toBe(9));

  it("should get maximum number of an array of negative numbers", () =>
    expect(getMaxNumbers([-5, -9, -3, -1])).toBe(-1));


module.exports = {add, greeting, subtract, isAdult};

