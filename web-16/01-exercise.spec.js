const fs = require("fs");
const html = fs.readFileSync("/Users/ace/Desktop/FrontEnd-js/i4-frontend-specialisation/Japan/food.jpg");

jest.dontMock("fs");

describe("web exercise 1", () => {
  it("should check if we add an img and p tag", () => {
    expect(document.getElementsByTagName("img")).toHaveLength(0);
    expect(document.getElementsByTagName("p")).toHaveLength(0);
    require("./01-exercise.js");
    expect(document.getElementsByTagName("img")).toHaveLength(1);
    expect(document.getElementsByTagName("p")).toHaveLength(1);
  });
});
