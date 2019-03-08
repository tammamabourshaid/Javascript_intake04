class NumberGuesser {
    constructor(number) {
        this.number = number;
        this.tries = 0;
    }

    guess(number) {
        this.tries++;
        if (number < this.number) {
            return "below";
        }

        if (number > this.number) {
            return "above";
        }

        return "hit";

    }
    getTries() {
        return this.tries;
    }
}
module.exports = {
    NumberGuesser
};