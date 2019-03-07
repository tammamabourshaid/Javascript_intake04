class NumberGuesser {
  constructor(number) {
    this.number = number;
    this.tries = 0;
  }

  guess(guessNumber) {
    if (guessNumber < this.number) {
      this.tries += 1;
      return "below";
    }
    if (guessNumber > this.number) {
      this.tries += 1;
      return "above";
    }
    if (guessNumber === this.number) {
      this.tries += 1;
      return "hit";
    }
  }

  getTries() {
    return this.tries;
  }

}
module.exports = { NumberGuesser };