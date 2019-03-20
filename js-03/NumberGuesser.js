class NumberGuesser {
  constructor(number) {
    this.number = number;
    this.tries = 0;
  }

  guess(number) {
    this.tries++;

    if (number === this.number) {
      return "hit";
    } else if (number > this.number) {
      return "above";
    } else {
      return "below";
    }
  }

  getTries() {
    return this.tries;
  }
}

module.exports = { NumberGuesser };
