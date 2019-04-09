const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("./products"));

app.listen(port, () => 
console.log(`Web server is running on http://localhost:${port}`));