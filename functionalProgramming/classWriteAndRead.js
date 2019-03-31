const fs = require("fs"); // https://nodejs.org/api/fs.html


fs.writeFile("austria.json", JSON.stringify(europe), () =>
    console.log("file 1 has been written")
);

fs.readFile("austria.json", (err, content) => {
    const {
        austria
    } = JSON.parse(content);
    console.log(Object.entries(austria));
})
fs.writeFile("hover.json", JSON.stringify(moles), () =>
    console.log("file 2 has been written")
);
fs.readFile("hover.json", (err, content) => {
    const {
        hover
    } = JSON.parse(content);
    console.log(Object.entries(hover));
})