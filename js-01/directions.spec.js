const { shortenDirections } = require("./directions");

describe("shortenDirections", () => {
  it("should go west", () =>
    expect(
      shortenDirections([
        "NORTH",
        "SOUTH",
        "SOUTH",
        "EAST",
        "WEST",
        "NORTH",
        "WEST"
      ])
    ).toEqual(["WEST"]));

  it("should go nowhere", () =>
    expect(shortenDirections(["NORTH", "EAST", "SOUTH", "WEST"])).toEqual([]));

  it("should go only north", () =>
    expect(
      shortenDirections(["EAST", "NORTH", "NORTH", "NORTH", "WEST"])
    ).toEqual(["NORTH", "NORTH", "NORTH"]));
});
 