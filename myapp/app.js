//To Run: node app.js in home directory

/* IMPORTS, INCLUDE */
var express = require('express');
var fs=require('fs');

var app = express();
var port = 3000;
var file = 'products.json'

app.get('/', function (req, res)
{
var data = fs.readFileSync(file , 'utf8'); //get file into filestream
var words = JSON.parse(data); // read file to end and save into var words

res.send(words); //return content file0
});

app.listen(port, () => console.log(`I am listening on port ${port}!`));


