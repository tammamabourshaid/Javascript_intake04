const fs = require("fs");

const file = "js-05/lecture-exercises/exercise6";

fs.readFile(file, "utf8", (error, data) => {
  error ? console.log(error.message) : console.log(data);
});