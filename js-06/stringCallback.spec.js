const { stringCallback, stringCallbackAsPromise } = require("./stringCallback");

describe(`it is a function with a callback returning the
string passed as parameter prepended by "Hello ".
Should be available as callback and Promise`, () => {
  it("should check against the callback", done => {
    stringCallback("User", text => {
      expect(text).toBe("Hello User");
      done();
    });
  });

  it("should check the against the number3", done => {
    stringCallbackAsPromise("Another User").then(text => {
      expect(text).toBe("Hello Another User");
      done();
    });
  });
});
