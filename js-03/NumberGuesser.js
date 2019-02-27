class NumberGuesser {
    constructor(number) {
        this.number = number;
        this.getTries = 0;
    }

    guess(number) {
        // let tries = 0;
        if (number < this.number) {
            return "below";
        }
        //tries++
        this.getTries++;
        if (number > this.number) {
            return "above";
        }
        // tries++;
        this.getTries++;
        if (number === this.number) {
            return "hit";
        }
    }
    getTries() {
        return this.getTries += tries;
    }
}
module.exports = {
    NumberGuesser
};


//it did not work...
// i tried to get the tries by having a count and it adds to it after each condition still did not work
// i tried to modify the constructure directly and it also did not work