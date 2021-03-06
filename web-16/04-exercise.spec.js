const fs = require("fs");
const html = fs.readFileSync("./web-16/04-exercise.html", "utf8");

jest.dontMock("fs");

describe("web exercise 4 should add a render function to the window object that renders a JavaScript object to HTML", () => {
  it("should create an h1 with text", () => {
    document.documentElement.innerHTML = html.toString();
    require("./04-exercise.js");
    window.render({
      tag: "h1",
      text: "Hello World"
    });

    const [h1] = document.getElementsByTagName("h1");
    expect(h1.innerHTML).toBe("Hello World");
  });

  it("should create a paragaph with an image", () => {
    document.documentElement.innerHTML = html.toString();
    require("./04-exercise.js");

    window.render({
      tag: "p",
      text: "This is an image",
      children: [
        {
          tag: "img",
          src: "Drau.jpg",
          alt: "Drau"
        }
      ]
    });

    const [p] = document.getElementsByTagName("p");
    const [text, img] = p.childNodes;
    expect(text.nodeValue).toBe("This is an image");
    expect(img.src).toMatch(/Drau.jpg$/);
    expect(img.alt).toBe("Drau");
  });

  it("should render a bootstrap-like html", () => {
    document.documentElement.innerHTML = html.toString();
    require("./04-exercise.js");

    window.render({
      tag: "div",
      className: "container",
      children: [
        {
          tag: "div",
          className: "row",
          children: [
            { tag: "div", className: "col-6", text: "Half Width" },
            { tag: "div", className: "col-6", text: "Other half" }
          ]
        }
      ]
    });

    const [container] = document.getElementsByClassName("container");
    const [row] = container.childNodes;
    expect(row.childNodes).toHaveLength(2);
    const [half1, half2] = row.childNodes;
    expect(half1.innerHTML).toBe("Half Width");
    expect(half2.innerHTML).toBe("Other half");
  });
  it("should render two images", () => {
    document.documentElement.innerHTML = html.toString();
    require("./04-exercise.js");

    window.render({
      tag: "div",
      className: "flex",
      children: [
        { tag: "img", src: "AngkorWat.jpg" },
        { tag: "img", src: "Drau.jpg" }
      ]
    });

    expect(document.getElementsByClassName("flex")[0].innerHTML).toBe(
      '<img src="AngkorWat.jpg"><img src="Drau.jpg">'
    );
  });
});
