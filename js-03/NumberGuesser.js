class NumberGuesser {
    constructor(x) { this.x = x; this.tries = 0; }
    guess(y) {
        this.tries++;
        if (y < this.x) { return "below" }
        if (y > this.x) { return "above" }
        else { return "hit" }
    }
    getTries() {
        return this.tries;
    }
}

module.exports = { NumberGuesser };