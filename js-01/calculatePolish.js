function calculatePolish(operator, x, y) {
    return eval(x + operator + y)
}

module.exports = { calculatePolish };