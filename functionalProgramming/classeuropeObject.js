const fs = require("fs"); // https://nodejs.org/api/fs.html

const europe = {
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
    },
    italy: {
        population: 60483973,
        capital: "Rome",
        size: 301338
    }
}


 function writeData() {
    fs.writeFile("europe.json", JSON.stringify(europe), () =>
            console.log("file europe has been written")
            
        )
 }
    
 writeData(europe);