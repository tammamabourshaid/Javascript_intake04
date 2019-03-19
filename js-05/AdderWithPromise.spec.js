const { AdderWithPromise } = require("./AdderWithPromise");

describe(`
AdderWithPromise should allow us to add numbers which
can be summed. The sum is returned as promise`, () => {
  it("should add two values", async () => {
    const adder = new AdderWithPromise();
    adder.add(1);
    adder.add(1);
    const sum = await adder.sum();

    expect(sum).toBe(2);
  });

  it("should add multiple values", async () => {
    const adder = new AdderWithPromise();
    adder.add(5);
    adder.add(3);
    adder.add(-4);
    const sum = await adder.sum();

    expect(sum).toBe(4);
  });

  it("should return 0 if no numbers have been set", async () => {
    expect(await new AdderWithPromise().sum()).toBe(0);
  });
});


