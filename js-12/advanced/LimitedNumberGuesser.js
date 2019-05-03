class LimitedNumberGuesser {
  constructor(generateReplier) {
    this.generateReplier = generateReplier;
  }

  guess() {
    let guessedNumber = 0, minNumber = 0, maxNumber = 100, guessedNumberResult = this.generateReplier(guessedNumber);

    while (guessedNumberResult !== 'equal') {
      if (guessedNumberResult === 'above') {
        maxNumber = guessedNumber;
        guessedNumber -= this.compare(guessedNumber, minNumber);
      } else {
        minNumber = guessedNumber;
        guessedNumber += this.compare(maxNumber, guessedNumber);
      }
      guessedNumberResult = this.generateReplier(guessedNumber);
    }

    return guessedNumber;
  }

  compare(number1, number2) {
    const middleNumber = (number1 - number2);

    return Math.round(middleNumber / 2);
  }
}

module.exports = { LimitedNumberGuesser };