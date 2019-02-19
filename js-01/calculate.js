function calculate(number1, operator, number2) {


    switch (operator) {
        case "+":
            number1 + number2;
            break;
        case "-":
            number1 - number2;
            break;
        case "/":
            number1 / number2;
            break;
    }

}
module.exports = { calculate };