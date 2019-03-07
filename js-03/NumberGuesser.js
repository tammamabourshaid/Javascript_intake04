class NumberGuesser {
  constructor(input) {
    this.input = input;
    this.tries = 0;
  }
  guess(number) {
    this.tries++;
    return (number === this.input) ? "hit" : (number > this.input) ? "above" : "below";
  }
  getTries() {
    return this.tries;
  }
}

module.exports = {
  NumberGuesser
};