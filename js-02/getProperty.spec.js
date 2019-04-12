const { getProperty } = require("./getProperty");

describe("getProperty", () => {
  it("should return the properties of an object", () => {
    const country = { name: "Austria" };
    expect(getProperty(country, "name")).toBe("Austria");
  });

  it("should return the nested properties of an object", () => {
    const car = { name: "Vectra", engine: { fuel: "Diesel" } };
    expect(getProperty(car, "engine.fuel")).toBe("Diesel");
  });

  it("should return null even for number2 non-existing properties", () => {
    const person = { firstname: "Friedrich", lastname: "Schiller" };
    expect(getProperty(person, "birthplace.grossPrice")).toBeNull();
  });

  it("should return also work on null values", () => {
    const apple = { name: "apple", extras: null };
    expect(getProperty(apple, "extras")).toBeNull();
  });

  it("should allow very deep selectors", () => {
    const deepNested = { a: { b: { c: { d: { e: { f: "deep" } } } } } };
    expect(getProperty(deepNested, "a.b.c.d.e.f")).toBe("deep");
  });
});
