const { getPromisedResult } = require("./getPromisedResult");

describe("PromiseConsumer should return the result of a promise", () => {
  it("should return 1 asynchronically", async () => {
    const result = await getPromisedResult(new Promise(resolve => resolve(1)));

    expect(result).toBe(1);
  });

  it("should return an object asynchronically", async () => {
    const result = await getPromisedResult(
      new Promise(resolve => resolve({ foo: "bar" }))
    );

    expect(result).toEqual({ foo: "bar" });
  });

  it("should return a string asynchronically", async () => {
    const result = await getPromisedResult(
      new Promise(resolve => resolve("hello world"))
    );

    expect(result).toBe("hello world");
  });
});
