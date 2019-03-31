class NumberGuesser {
  constructor(fn) {
    this.fn = fn;
  }

  guess() {
    let guessedNumber = 0, result = this.fn(guessedNumber);

    while (result !== 'equal') {
      guessedNumber = parseInt(Math.random() * 100);
      result = this.fn(guessedNumber);
    }

    return guessedNumber;
  }
}

module.exports = { NumberGuesser };