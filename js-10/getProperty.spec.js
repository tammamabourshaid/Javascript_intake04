const { getProperty } = require("./getProperty");

describe("getProperty should return the property of an existing obejct", () => {
  it("shoud return the two name properties", () => {
    const person = { firstName: "Peppi", lastName: "Grandits" };
    expect(getProperty(person, "firstName")).toBe("Peppi");
    expect(getProperty(person, "lastName")).toBe("Grandits");
  });

  it("shoud null if the property does not exist", () => {
    const person = { firstName: "Peppi", lastName: "Grandits" };
    expect(getProperty(person, "firstname")).toBeNull();
  });

  it("shoud return a nested object too", () => {
    const car = { name: "Vectra", engine: { fuel: "Diesel" } };
    expect(getProperty(car, "engine")).toEqual({ fuel: "Diesel" });
  });
});
