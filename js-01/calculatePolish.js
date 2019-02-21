function calculatePolish(number1, operator, number2) {
    return eval(operator + number1 + number2)

}

module.exports = { calculatePolish };