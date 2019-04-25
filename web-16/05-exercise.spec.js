const fs = require("fs");
const html = fs.readFileSync("./web-16/05-exercise.html", "utf8");

jest.dontMock("fs");

describe("web exercise 5 should replace placeholder values in the html", () => {
  it("should replace the footer", () => {
    document.documentElement.innerHTML = html.toString();
    const getText = () => document.getElementsByTagName("p")[0].innerHTML;

    expect(getText()).toBe("{{ bodyText }}");
    require("./05-exercise.js");

    window.replace("bodyText", "Das ist ein Test");
    expect(getText()).toBe("Das ist ein Test");
  });
});
