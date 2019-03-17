const { calculate } = require("./calculate");

const calculatePolish = (operation, number1, number2) => calculate(number1, operation, number2);

module.exports = { calculatePolish };