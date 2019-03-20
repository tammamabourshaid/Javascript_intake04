const fs = require("fs");

const file = "js-05/lecture-exercises/exercise6";

const data = new Uint8Array(Buffer.from(`Hello!

Can you even read this file!?

HELP!

OIDA, JavaScript ist echt cool!`))

fs.writeFile(file, data, (error) => {
  if (error) throw error;
  console.log("The file has been saved!");
});

fs.readFile(file, "utf8", (error, data) => {
  error ? console.log(error.message) : console.log(data);
});