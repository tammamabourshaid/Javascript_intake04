const { getProperty } = require("./getPropertyStartsWith");

describe(`getProperty should return the property or properties
 of an existing object by checking if the key starts with the
 given string`, () => {
  it("shoud return the two name properties", () => {
    const person = { firstName: "Peppi", lastName: "Grandits" };
    expect(getProperty(person, "first")).toBe("Peppi");
    expect(getProperty(person, "l")).toBe("Grandits");
  });

  it("shoud return an array if multiple properties match", () => {
    const product = { price: 12.5, premium: true, name: "pizza" };
    expect(getProperty(product, "pr")).toEqual([12.5, true]);
  });
});
