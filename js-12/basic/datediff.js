const moment = require("moment");

function datediff(first, second) {
  const date1 = moment(first);
  const date2 = moment(second);

  const result = Math.abs(date1.diff(date2, "days", true));

  //console.log(date2.diff(date1,'days'));
  //console.log(date2.diff(date2,'hours'));
  if (result < 1) {
    return Math.floor(result);
  }
  return Math.floor(Math.abs(date1.diff(date2, "days", true)));
}
const first = new Date(2017, 0, 5, 0, 0);
const second = new Date(2017, 0, 5, 0, 1);
datediff(first, second);


module.exports = { datediff };
