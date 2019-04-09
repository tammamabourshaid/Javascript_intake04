const express=require("express");
const webServer=express();
const port=3000;

webServer.use(express.static("./"));
webServer.listen(port,() =>
console.log(`Weberver running on http://localhost:${port}!`))

