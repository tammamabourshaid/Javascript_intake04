
const {
  mapOneArgumentCallbackToPromise
} = require("./mapOneArgumentCallbackToPromise");

describe(`
This function should wrap a method that awaits one argument
and one callback to a function that returns a Promise.
`, () => {
  it("should map function toString to a function that returns a promise", async () => {
    const toString = (number, callback) => callback(number + "");
    const toStringPromise = mapOneArgumentCallbackToPromise(toString);

    expect(await toStringPromise(10)).toBe("10");
  });

  it("should map function add10 to a function that returns a promise", async () => {
    const add10 = (number, callback) => callback(number + 10);
    const toStringPromise = mapOneArgumentCallbackToPromise(add10);

    expect(await toStringPromise(10)).toBe(20);
  });
});