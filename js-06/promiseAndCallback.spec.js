const { numberAsPromise, numberAsCallback } = require("./promiseAndCallback");

describe(`we have two functions returning a number. one does it 
via a callback and returns 1, the other via a Promise and returns 5`, () => {
  it("should add both numbers", done => {
    numberAsCallback(number1 => {
      numberAsPromise().then(number2 => {
        expect(number1 + number2).toBe(6);
        done();
      });
    });
  });
});
