const fs = require("fs");
const html = fs.readFileSync("./web-17/03-exercise.html", "utf8");

jest.dontMock("fs");

describe("web exercise 3", () => {
  it("should print the class name of each button on click", () => {
    document.documentElement.innerHTML = html.toString();
    const [button1, button2, button3] = document.getElementsByTagName("button");
    require("./03-exercise.js");

    Array.from([button1, button2, button3]).forEach(button =>
      expect(button.innerHTML).toBe("Button")
    );

    window.dispatchEvent(new Event("DOMContentLoaded"));
    button1.click();
    expect(button1.innerHTML).toBe("button-1");
    button2.click();
    expect(button2.innerHTML).toBe("submitter");
    button3.click();
    expect(button3.innerHTML).toBe("resetter");
  });

  it("should also work with changed class names", () => {
    document.documentElement.innerHTML = html.toString();
    const [button1, button2, button3] = document.getElementsByTagName("button");

    Array.from([button1, button2, button3]).forEach(button =>
      expect(button.innerHTML).toBe("Button")
    );

    button1.className = "foo";
    button2.className = "bar";
    button3.className = "foobar";

    window.dispatchEvent(new Event("DOMContentLoaded"));
    button1.click();
    button2.click();
    button3.click();

    expect(button1.innerHTML).toBe("foo");
    expect(button2.innerHTML).toBe("bar");
    expect(button3.innerHTML).toBe("foobar");
  });
});
