var request = require('request');

request('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population-density.json', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

const test=JSON.parse(body)
console.log(test);
const s = test.map(e=> e.density)
const top3most=s.sort((a,b)=>(b-a))
.slice(0,3)
console.log(top3most);
const top3least=s.sort((a,b)=>(a-b))
.filter(e=>e!==null&&e!=="0")
.slice(0,3)
console.log(top3least);

});
