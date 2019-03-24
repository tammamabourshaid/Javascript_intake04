const fs=require("fs");
function writeToFile(filename,data){
    return new Promise(resolve=>fs.writeFile(filename,data,resolve));
}
writeToFile("noteBook","I am doing my assinment").then(function(){
    console.log("file has been written");
});
const typefile=async function(){
    const writeTheFile=await writeToFile("noteBook.txt","I am doing my assinment");
    console.log(writeTheFile);
}
typefile();

function readOnFile(filename,data){
    return new Promise(resolve => fs.readFile(filename,data,resolve));
} 

readOnFile("noteBook","utf8").then(function(){
        console.log("file has been read");
    });
const readOutfile=async function(){
    const studyFile=await readOnFile("noteBook","utf8");
    console.log(studyFile);
}
readOutfile();