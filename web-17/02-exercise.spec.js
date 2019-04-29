const fs = require("fs");
const html = fs.readFileSync("./web-17/02-exercise.html", "utf8");

jest.dontMock("fs");

describe("web exercise 2", () => {
  it("should count as it is", () => {
    document.documentElement.innerHTML = html.toString();
    require("./02-exercise.js");
    expect(document.getElementsByClassName("h1")).toHaveLength(0);

    window.dispatchEvent(new Event("DOMContentLoaded"));
    const [h1] = document.getElementsByTagName("h1");

    expect(h1.innerHTML).toBe("4");
  });

  it("should count with one added element", () => {
    document.documentElement.innerHTML = html.toString();
    require("./02-exercise.js");
    document.body.appendChild(document.createElement("p"));
    expect(document.getElementsByClassName("h1")).toHaveLength(0);

    window.dispatchEvent(new Event("DOMContentLoaded"));
    const [h1] = document.getElementsByTagName("h1");

    expect(h1.innerHTML).toBe("5");
  });
});
