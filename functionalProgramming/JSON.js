const fs = require("fs"); // https://nodejs.org/api/fs.html

const nested = {
  europe: {
    austria: {
      population: 8773000,
      capital: "Vienna",
      size: 83879
    },
    france: {
      population: 66991000,
      capital: "Paris",
      size: 643801
    },
    germany: {
      population: 82790000,
      capital: "Berlin",
      size: 357386
    }
  }
};

fs.writeFile("europe.json", JSON.stringify(nested), () =>
  console.log("file has been written")
);


fs.readFile("europe.json", (err, content) => {
  const {
    europe
  } = JSON.parse(content);
  console.log(Object.entries(europe));
});
const array = ['Hello', 'World']
const array1 = {
  a: ['Hello', 'World'],
  b: 2,
  c: 'Hello',
  Badi: {
    'Raslan': 2
  }
};
console.log(JSON.stringify(array));
console.log(array);
console.log(JSON.stringify(array1));


function writeToFile(filename, data) {
  return new Promise(resolve => fs.writeFile(filename, data, resolve));
}
writeToFile("europe.txt", "Hellooooo").then(function () {

  console.log("file 2 has been writen");
});

fs.readFile("europe.txt", (err, content) => {
  console.log(JSON.parse(content));

});
