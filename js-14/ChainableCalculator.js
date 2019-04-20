class ChainableCalculator {

    constructor(initialNumber) {
        this.initialNumber = initialNumber;


    }
    add(number) {
        this.initialNumber += number;
        return this;
    }
    subtract(number) {
        this.initialNumber -= number;
        return this;
    }
    multiply(number) {
        this.initialNumber *= number;
        return this;
    }
    divide(number) {
        this.initialNumber /= number;
        return this;
    }
    getResult() {
        return this.initialNumber;
    }
}
module.exports = { ChainableCalculator }
