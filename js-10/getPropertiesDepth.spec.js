const { getPropertiesDepth } = require("./getPropertiesDepth");

describe(`PropertiesDepth should return an object that contains
the same properties as the passed one. But the value shoud contain
the amount of levels.`, () => {
  it("should work return 1 on non-nested objects", () => {
    const person = { firstName: "Peppi", lastName: "Grandits" };
    expect(getPropertiesDepth(person)).toEqual({ firstName: 1, lastName: 1 });
  });

  it("should work on a nested object", () => {
    const europe = {
      austria: {
        population: 8773000,
        capital: "Vienna",
        size: 83879
      },
      france: {
        population: 66991000,
        capital: "Paris",
        size: 643801
      },
      germany: {
        population: 82790000,
        capital: "Berlin",
        size: 357386
      },
      italy: {
        population: 60483973,
        capital: "Rome",
        size: 301338
      }
    };

    expect(getPropertiesDepth(europe)).toEqual({
      austria: 2,
      france: 2,
      germany: 2,
      italy: 2
    });
  });

  it("should handle an object with different levels of nested objects", () => {
    const variant = {
      level1: {
        level2a: 5,
        level2b: {
          level3a: { foo: "bar" },
          level3b: 5
        }
      }
    };

    expect(getPropertiesDepth(variant)).toEqual({ level1: 4 });
    expect(getPropertiesDepth(variant.level1)).toEqual({
      level2a: 1,
      level2b: 3
    });
  });
});
