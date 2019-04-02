class AsyncNumberGuesser {
  constructor(fn) {
    this.fn = fn;
  }

  async guess() {
    let guessedNumber = 0, result = await this.fn(guessedNumber);

    while (result !== 'equal') {
      guessedNumber = parseInt(Math.random() * 100);
      result = await this.fn(guessedNumber);
    }
    
    return guessedNumber;
  }

}

module.exports = { AsyncNumberGuesser };