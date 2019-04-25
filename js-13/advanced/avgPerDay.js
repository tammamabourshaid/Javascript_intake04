const fs = require("fs");
const moment = require("moment");
const _ = require("lodash");
const weatherInfo = fs.readFileSync("js-13/advanced/history_export_2019-04-07T06_40_00.csv","utf8"
);
const data = weatherInfo.split("\n");
data.shift();

const dataSplit = data.map(el => el.split(";"));

const allTemps = {};
for (let i = 0; i < dataSplit.length - 1; i++) {
  let next = i + 1;
  let date = dataSplit[i].slice(0, 3).join("-");
  let temperature = dataSplit[i][5];
 // console.log(date, temperature);
  

  if (!allTemps[date] || allTemps[date].length <= 0) {
    allTemps[date] = [];
  }
  if (
    dataSplit[next] &&
    moment(date).isSame(moment(dataSplit[next].slice(0, 3).join("-"))) || 
    moment(date).diff(moment(dataSplit[next].slice(0, 3).join("-")), "days") <= 1) {
    allTemps[date].push(temperature);
  }
}
//console.log(allTemps);
let result = {}
for (const date in allTemps) {
 result[date] = _.meanBy(allTemps[date], temp => parseFloat(temp));
 
}
console.log(result);


// const avg = allTemps[key].map(date => console.log(date));
// console.log(avg);

// console.log(allTemps);
