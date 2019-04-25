class NumberGuesser {

  constructor(fn) {
    this.fn = fn;
  }

  guess() {
    for (let guessedNumber = 0; guessedNumber <= 99; guessedNumber++) {
      const result = this.fn(guessedNumber);
      if (result === "equal") {
        console.log(guessedNumber);

        return guessedNumber;
      }
    }
  }
}

module.exports = { NumberGuesser };