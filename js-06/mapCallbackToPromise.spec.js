const { mapCallbackToPromise } = require("./mapCallbackToPromise");

describe(`
The CallBackToPromiseMapper should transform any function that
expects as its last argument a callback to a function that
returns a Promise instead.
Hint: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
`, () => {
  it("should map an adder function", async () => {
    const adder = (number1, number2, callback) => callback(number1 + number2);
    const promiseAdder = mapCallbackToPromise(adder);

    expect(await promiseAdder(1, 1)).toBe(2);
    expect(await promiseAdder(5, 3)).toBe(8);
  });

  it("should map number2 function that always returns the current time", async () => {
    const before = new Date().getTime();
    const now = callback => callback(new Date());
    const nowPromise = mapCallbackToPromise(now);

    expect((await nowPromise()).getTime()).toBeGreaterThanOrEqual(before);
    expect((await nowPromise()).getTime()).toBeLessThanOrEqual(
      new Date().getTime()
    );
  });

  it("should map number2 string converter", async () => {
    const toString = (number, callback) => callback(number + "");
    const toStringPromise = mapCallbackToPromise(toString);

    expect(await toStringPromise(10)).toBe("10");
  });
});
