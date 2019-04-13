const fs=require("fs")
const express=require("express");
const webServer=express();
const port=3000;
const product = fs.readFileSync("products.json", "utf8")

  

webServer.get('/', (req, res) => res.send(product))
webServer.listen(port,() =>
console.log(`Weberver running on http://localhost:${port}!`))

//module.exports={HttpServer};
