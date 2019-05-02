const fs = require("fs");
const html = fs.readFileSync("./web-16/05-exercise.html", "utf8");

jest.dontMock("fs");

describe("web exercise 5 should replace placeholder values in the html", () => {
  it("should replace the body", () => {
    document.documentElement.innerHTML = html.toString();
    const getText = () => document.getElementsByTagName("p")[0].innerHTML;

    expect(getText()).toBe("{{ bodyText }}");
    require("./05-exercise.js");

    window.replace("bodyText", "Das ist ein Test");
    expect(getText()).toBe("Das ist ein Test");
  });

  it("should replace the body with another text", () => {
    document.documentElement.innerHTML = html.toString();
    const getText = () => document.getElementsByTagName("p")[0].innerHTML;

    expect(getText()).toBe("{{ bodyText }}");
    require("./05-exercise.js");

    window.replace("bodyText", "Das ist noch ein Test");
    expect(getText()).toBe("Das ist noch ein Test");
  });

  it("should replace all placeholders", () => {
    document.documentElement.innerHTML = html.toString();
    const getText = () => document.getElementsByTagName("p")[0].innerHTML;
    const getFooter = () =>
      document.getElementsByTagName("footer")[0].innerHTML;
    const getHeader = () => document.getElementsByTagName("h1")[0].innerHTML;

    expect(getHeader()).toBe("{{ header }}");
    expect(getText()).toBe("{{ bodyText }}");
    expect(getFooter()).toBe("{{ footer }}");
    require("./05-exercise.js");

    window.replace("bodyText", "Das ist der Body");
    window.replace("header", "Das ist der Header");
    window.replace("footer", "Das ist der Footer");

    expect(getHeader()).toBe("Das ist der Header");
    expect(getText()).toBe("Das ist der Body");
    expect(getFooter()).toBe("Das ist der Footer");
  });
});
