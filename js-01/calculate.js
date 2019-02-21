const calculate = (number1, operation, number2) => {
    // if (operation === "+") {
    //     return number1 + number2;
    // }
    // if (operation === "*") {
    //     return number1 * number2;
    // }
    // if (operation === "/") {
    //     return number1 / number2;
    // }
    // if (operation === "-") {
    //     return number1 - number2;
    // }
    return eval(number1 + operation + number2);
};

module.exports = { calculate };