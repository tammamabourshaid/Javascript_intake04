const { LimitedNumberGuesser } = require("./LimitedNumberGuesser").default;

describe(`LimitedNumberGuesser should find a number
from 0 - 99. It gets injected a function that,
if passed the guessed number, returns 'below', 'above'
or 'equal'.
The method guess of LimitedNumberGuesser should return
the randomised number.
`, () => {
  function generateReplier(number) {
    let tries = 0;
    return guessedNumber => {
      tries++;
      if (tries > 7) {
        throw new Error(
          `exceed the maximum amount 5 tries for number ${number}`
        );
      }
      if (guessedNumber > number) {
        return "above";
      } else if (guessedNumber < number) {
        return "below";
      } else {
        return "equal";
      }
    };
  }

  it("should guess each number from 1 -99", () => {
    const number = parseInt(Math.random() * 100);
    for (let i = 1; i < 100; i++) {
      expect(new LimitedNumberGuesser(generateReplier(number)).guess()).toBe(
        number
      );
    }
  });
});
