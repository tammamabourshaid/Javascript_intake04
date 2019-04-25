const _ = require("lodash");
const fs = require("fs");
const moment = require("moment");


async function avgPerDay() {
   //return a new promise(resolve=>)
   await fs.readFile('./history_export_2019-04-07T06_40_00.csv', 'utf8', function (err, contents) {

      const array = contents.split("\n");
      array.shift();
      const dates = array.map(date => [date, date.split(";").slice(0, 3).join("-")]).map(([orig, date]) => [moment(date), orig.split(";")[5]]);
      // const temperature = array.map(temp => temp.split(";")[5]);
      // console.log(dates);

      let average = {};

      for (let i = 0; i < dates.length - 1; i++) {
         const element = dates[i];
         let next = i + 1;
         // console.log(element[0].isSame(dates[i+1]));
         if (!average[dates[i][0]] || average[dates[i][0]].length <= 0) {
            average[dates[i][0]] = [];
         }
         if (dates[next][0] && element[0].isSame(dates[next][0]) || dates[next][0].diff(dates[next][0], 'days') <= 1) {
            average[dates[i][0]].push((dates[i][1]));
         }
      }

      // console.log(result);
      let result = {};
      for (const date in average) {
         // console.log(result[date]);
         const avg = _.meanBy(average[date], (date) => parseFloat(date))
         result[moment(date).format("YYYY-MM-DD")] = avg;
      }
      return result;
      //console.log(result);
   });
};
module.exports = {
   avgPerDay
};