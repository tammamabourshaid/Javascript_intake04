const fs = require("fs");
const html = fs.readFileSync("/Users/ace/Desktop/FrontEnd-js/i4-frontend-specialisation/web-16/02-exercise.html");

jest.dontMock("fs");

describe("web exercise 2", () => {
  it("should remove the p tag with .to-be-removed", () => {
    document.documentElement.innerHTML = html.toString();
    expect(document.getElementsByTagName("p")).toHaveLength(3);
    require("./02-exercise.js");
    expect(document.getElementsByTagName("p")).toHaveLength(2);
  });
});
