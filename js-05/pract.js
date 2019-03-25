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

// fs.writeFile("europe.json", JSON.stringify(nested), () =>
//   console.log("file has been written")
// );
// fs.readFile("europe.json", (err, content) => {
//   const { europe } = JSON.parse(content);
//   console.log(Object.keys(europe));
// });

const fs=require("fs");
function writeToFile(filename,data){
    return new Promise(resolve=>fs.writeFile(filename,data,resolve));
}

const typefile=async function(){
    const writeTheFile=await writeToFile("europe.json",JSON.stringify(nested));
    console.log(writeTheFile);
}
typefile();
