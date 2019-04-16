const moment = require('moment');

const datediff = (date1, date2) => {
  const dateOne = moment(date1).format('YYYY-MM-DD'),
    dateTwo = moment(date2),
    difference = dateTwo.diff(dateOne, 'days'),
    absoluteDifference = Math.abs(difference);

  return absoluteDifference;
};

module.exports = { datediff };