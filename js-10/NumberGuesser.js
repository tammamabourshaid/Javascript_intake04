class NumberGuesser {
  constructor(fn) {
    this.fn = fn;
  }

  guess() {
    let guessedNumber = 0, method = this.fn(guessedNumber);

    while (method !== 'equal') {
      guessedNumber = parseInt(Math.random() * 100);
      method = this.fn(guessedNumber);
      if (method === 'equal') {
        return guessedNumber;
      }
    }

    return guessedNumber;
  }
}

module.exports = { NumberGuesser };