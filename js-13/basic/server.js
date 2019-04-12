const fs = require("fs");

const express = require('express')
const app = express()
const port = 4000


  const product = fs.readFileSync("./products.json", "utf8");

app.get('/', (req, res) => res.send(product));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));




//app , use(rxpress and then the path)
//and then listen