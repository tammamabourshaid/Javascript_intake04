const { AsyncNumberGuesser } = require("./AsyncNumberGuesser");

describe(`AsyncNumberGuesser should find a number
from 0 - 99. It gets injected a function that,
if passed the guessed number, returns 'below', 'above'
or 'equal'.
The method guess of AsyncNumberGuesser should return
the randomised number.
`, () => {
  function generateReplier(number) {
    return guessedNumber => {
      return new Promise(resolve => {
        let result = "";
        if (guessedNumber > number) {
          result = "above";
        } else if (guessedNumber < number) {
          result = "below";
        } else {
          result = "equal";
        }

        setTimeout(() => resolve(result));
      });
    };
  }

  it("should guess a randomised number", async () => {
    const number = parseInt(Math.random() * 100);
    const numberGuesser = new AsyncNumberGuesser(generateReplier(number));
    expect(await numberGuesser.guess()).toBe(number);
  });
});
