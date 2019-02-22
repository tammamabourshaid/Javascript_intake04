const { shortenDirections } = require("./directions");

describe("shortenDirections", () => {
  it("shoud go west", () =>
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
<<<<<<< HEAD

  it("should first print out the horizontals and then the verticals", () =>
    expect(shortenDirections(["SOUTH", "EAST"])).toEqual(["EAST", "SOUTH"]));
=======
>>>>>>> 500c18524cfb23b0f2588e3901d788ae2bf00373
});
