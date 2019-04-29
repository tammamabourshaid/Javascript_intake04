const fs = require("fs");
const html = fs.readFileSync("/Users/ace/Desktop/FrontEnd-js/i4-frontend-specialisation/web-16/03-exercise.html");

jest.dontMock("fs");

describe("web exercise 3", () => {
  it("should swap the positions of the two images", () => {
    document.documentElement.innerHTML = html.toString();
    let [drau, angkor] = document.getElementsByTagName("img");
    expect(drau.src).toMatch(/Drau/);
    expect(angkor.src).toMatch(/Angkor/);
    require("./03-exercise.js");
    [angkor, drau] = document.getElementsByTagName("img");
    expect(drau.src).toMatch(/Drau/);
    expect(angkor.src).toMatch(/Angkor/);
  });
});