class NumberGuesser {

    constructor(fn) {
        this.fn = fn;
        this.min = 0;
        this.max = 100;
    }

    guess() {

        let guessedNumber = Math.floor(this.min + (Math.random() * (this.max - this.min)));

        if (this.fn(guessedNumber) === "above") {
            this.max = guessedNumber - 1;
            guessedNumber = Math.floor(this.min + (Math.random() * (this.max - this.min)));
            return this.guess();
        }
        else if (this.fn(guessedNumber) === "below") {
            this.min = guessedNumber + 1;
            guessedNumber = Math.floor(this.min + (Math.random() * (this.max - this.min)));
            return this.guess();
        }
        else {
            return guessedNumber;
        }
    }
}



module.exports = { NumberGuesser }