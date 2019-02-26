function calculate(number1, mathSymbol, number2) {

    switch (mathSymbol) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            return number1 / number2;
        default:
            console.log("Not a math symbol");
    }
}

module.exports = { calculate };
