
const request = require("request");
request("https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population-density.json" ,
 { json: true }, (err, res, body) => {
if (err) { return console.log(err); }
//console.log(body);
//console.log(body.explanation);

let least = body.filter(country => country.density !== null)
least.sort(function(element,element1){
      return parseFloat(element.density) - parseFloat(element1.density);   
});

console.log("Top 3 least dense countries : ")
console.log(least.slice(0,3));
least.reverse();
console.log("Top 3 most dense countries : ");
console.log(least.slice(0,3));

});

