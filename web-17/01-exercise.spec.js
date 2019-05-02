const fs = require("fs");
const html = fs.readFileSync("./01-exercise.html", "utf8");

jest.dontMock("fs");

describe("web exercise 1", () => {
  it("should add Austrian rivers", () => {
    document.documentElement.innerHTML = html.toString();
    expect(document.getElementsByTagName("ul")).toHaveLength(0);
    require("./01-exercise.js");

    const [ul] = document.getElementsByTagName("ul");
    const riverListItems = ul.children;
    const rivers = [
      "Danube",
      "Inn",
      "Mur",
      "Raab",
      "Rhein",
      "Salzach",
      "Drau",
      "Enns"
    ];

    rivers.forEach((river, ix) =>
      expect(riverListItems[ix].innerHTML).toBe(river)
    );
  });
});
