class NumberGuesser {
    constructor(fn) {
        this.fn = function (num) {
            return fn(num);
        }
    }
    guess() {
        let randomNumber = this.getNumber();
        if (this.fn(randomNumber) !== "equal") {
            return this.guess();
        }
        return randomNumber;
    }
    getNumber() {
        return parseInt(Math.random() * 100);
    }
}
module.exports = {
    NumberGuesser
};