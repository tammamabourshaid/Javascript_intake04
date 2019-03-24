const fs = require('fs');

fs.writeFileSync('writeMe.txt', "utf8","Believe you can and you're halfway there!") 
    if(error) throw error;
    console.log("File has been saved!");

fs.readFile("writeMe.txt", "utf8", (error, data) => {
    if(error) throw error;
    console.log(data);
});
 
