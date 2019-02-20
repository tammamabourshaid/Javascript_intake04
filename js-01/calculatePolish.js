function calculatePolish(operator, number1, number2) {
    return eval(number1 + operator + number2)
}

module.exports = { calculatePolish };