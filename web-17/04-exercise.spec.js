const fs = require("fs");
const html = fs.readFileSync("./web-17/04-exercise.html", "utf8");

jest.dontMock("fs");

describe("web exercise 4", () => {
  it("should print the first and lastname in the paragraph", () => {
    document.documentElement.innerHTML = html.toString();
    const [form] = document.getElementsByTagName("form");
    const [firstName, lastName] = document.getElementsByTagName("input");
    const [p] = document.getElementsByTagName("p");

    require("./04-exercise.js");
    window.dispatchEvent(new Event("DOMContentLoaded"));

    firstName.value = "Thomas";
    lastName.value = "Becket";
    expect(p.innerHTML).toBe("");
    const submitEvent = new Event("submit");
    form.dispatchEvent(submitEvent);
    expect(p.innerHTML).toBe("Thomas Becket");
  });
});
