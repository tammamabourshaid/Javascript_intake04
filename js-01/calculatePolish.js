const calculatePolish = (operation, number1, number2) => {
    if (operation === "+") {
        return number1 + number2;
    }
    if (operation === "*") {
        return number1 * number2;
    }
    if (operation === "/") {
        return number1 / number2;
    }
    if (operation === "-") {
        return number1 - number2;
    }
};

module.exports = { calculatePolish };