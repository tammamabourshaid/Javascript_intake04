function calculate(number1, operator, number2) {
    if (operator === "+") {
        return number1 + number2;
    }
    else if (operator === "*") {
        return number1 * number2;
    }
    else if (operator === "/") {

        return number1 / number2;
    }
    else if (operator === "-") {

        return number1 - number2;

    }
}

//second Solution
function calculate(number1, operation, number2) {
    switch (operation) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            return number1 / number2;
    }
}

module.exports = { calculate };


const a = 1;
console.log(a);