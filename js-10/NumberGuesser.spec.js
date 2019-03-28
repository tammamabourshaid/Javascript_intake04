const { NumberGuesser } = require("./NumberGuesser");

describe(`NumberGuesser should find a number
from 0 - 99. It gets injected a function that,
if passed the guessed number, returns 'below', 'above'
or 'equal'.
The method guess of NumberGuesser should return
the randomised number.
`, () => {
  function generateReplier(number) {
    return guessedNumber => {
      if (guessedNumber > number) {
        return "above";
      } else if (guessedNumber < number) {
        return "below";
      } else {
        return "equal";
      }
    };
  }

  it("should guess a randomised number", () => {
    const number = parseInt(Math.random() * 100);
    expect(new NumberGuesser(generateReplier(number)).guess()).toBe(number);
  });

  it("should guess 0", () => {
    const number = parseInt(Math.random() * 100);
    expect(new NumberGuesser(generateReplier(0)).guess()).toBe(0);
  });
  it("should guess 99", () => {
    expect(new NumberGuesser(generateReplier(99)).guess()).toBe(99);
  });
});
