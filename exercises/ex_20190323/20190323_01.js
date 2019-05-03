
const fs = require("fs");

const fn = async function () {
    const promise = new Promise(resolve => resolve(fs.readFile("exercises/ex_20190323/europe.json2.js", (err, content) => {
        const {europe} = JSON.parse(content);
        console.log("jsonfile:", Object.keys(europe));
    })));
    const filereader = await promise;
};
fn();