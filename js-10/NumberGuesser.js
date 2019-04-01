class NumberGuesser {

    constructor(fn) {
        this.fn = fn;
        this.min = 0;
        this.max = 100;
    }

    guess() {

        let guess = Math.floor(Math.random() * 100);

        if (this.fn(guess) === "above") {
            this.max = guess - 1;
            guess = Math.floor(Math.random() * (this.max - this.min));
            return this.guess();
        }
        else if (this.fn(guess) === "below") {
            this.min = guess + 1;
            guess = Math.floor(this.min + (Math.random() * (this.max - this.min)));
            return this.guess();
        }
        else {
            return guess;
        }
    }
}



module.exports = { NumberGuesser }