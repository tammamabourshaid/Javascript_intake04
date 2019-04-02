const { getProperty } = require("./getPropertyCaseInsensitive");

describe(`getProperty should return the property of an existing object
but should be case-insensitive`, () => {
  it("shoud return the two name properties", () => {
    const person = { firstName: "Peppi", lastName: "Grandits" };
    expect(getProperty(person, "FirstName")).toBe("Peppi");
    expect(getProperty(person, "lastname")).toBe("Grandits");
  });

  it("shoud work on full uppercase", () => {
    const city = { name: "Vienna" };
    expect(getProperty(city, "NAME")).toBe("Vienna");
  });
});
