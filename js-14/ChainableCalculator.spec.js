const { ChainableCalculator } = require("./ChainableCalculator");
describe(`This class should allow to chain methods that do basic
 mathematical operations sequentially. It should return the result
 by getResult and start with the nubmer passed in the constructor.
 HINT: The required technique can be found in the Builder pattern
 and is often called fluid.`, () => {
  it("should simply add", () => {
    const calculator = new ChainableCalculator(5);
    const result = calculator.add(5).getResult();
    expect(result).toBe(10);
  });

  it("should add and subtract", () => {
    const calculator = new ChainableCalculator(5);
    const result = calculator
      .add(5)
      .subtract(9)
      .getResult();
    expect(result).toBe(1);
  });

  it("should do all four basic operations", () => {
    const calculator = new ChainableCalculator(5);
    const result = calculator
      .add(1)
      .multiply(4)
      .subtract(3)
      .divide(7)
      .getResult();
    expect(result).toBe(3);
  });

  it("should allow the same operation multiple times", () => {
    const calculator = new ChainableCalculator(1);

    const result = calculator
      .add(1)
      .add(1)
      .multiply(3)
      .multiply(2)
      .add(2)
      .divide(4)
      .getResult();
    expect(result).toBe(5);
  });

  it("should return the initial nubmer when no operation is executed", () => {
    expect(new ChainableCalculator(10).getResult()).toBe(10);
  });
});
