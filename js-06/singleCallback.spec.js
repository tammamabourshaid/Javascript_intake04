const { singleCallback, singleCallbackAsPromise } = require("./singleCallback");

describe(`it is a function with a callback returning
number 1 as argument. Should be available as callback 
and Promise`, () => {
  it("should check against the callback", done => {
    singleCallback(number => {
      expect(number).toBe(1);
      done();
    });
  });

  it("should check the against the promise", done => {
    singleCallbackAsPromise().then(number => {
      expect(number).toBe(1);
      done();
    });
  });
});
