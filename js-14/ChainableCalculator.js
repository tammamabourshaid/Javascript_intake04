const math = require('mathjs');
class ChainableCalculator {
    constructor(number) {
        this.number = number;
    }

    add(number) {
        this.number += number;
        return this;

    }
    subtract(number) {
        this.number -= number;
        return this;
    }
    multiply(number) {
        this.number *= number;
        return this;
    }
    divide(number) {
        this.number /= number;
        return this;
    }
    getResult() {
        return this.number;

    }
}
module.exports = {
    ChainableCalculator
};