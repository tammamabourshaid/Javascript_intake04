class LimitedNumberGuesser {

  constructor(fn) {
    this.fn = fn;
  }

  guess() {
    for (let guessedNumber = 0; guessedNumber <= 99; guessedNumber++) {
      const result = this.fn(guessedNumber);
      if (result === "equal") {

        return guessedNumber;
      }
    }
  }
}

module.exports = { LimitedNumberGuesser };