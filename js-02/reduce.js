const { mapOnlyNumbers } = require("reduce");

describe("mapOnlyNumbers", () => {
  it("should only map if the mappingFn returns a number", () => {
    const array = [1, 5, 2, 9, 10];
    const mappingFn = value => {
      if (value % 2 === 1) {
        return value * 10;
      } else {
        return false;
      }
    };

    expect(mapOnlyNumbers(array, mappingFn)).toEqual([20, 100]);
  });

  it("should also not when mapping returns a string", () => {
    const mappingFn = number => number.toString();
    expect(mappingFn, [1, 2, 3, 4, 5]).toEqual([]);
  });
});
