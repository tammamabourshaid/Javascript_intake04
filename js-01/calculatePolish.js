const calculatePolish = ( operator,number1, number2) => {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "*") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else if (operator === "-") {
        return number1 - number2;
    }
};
module.exports = { calculatePolish };