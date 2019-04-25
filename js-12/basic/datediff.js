const moment = require("moment");

const datediff = function(date1, date2) {
    const first = moment(date1).format("YYYY-MM-DD");
    const second = moment(date2);
    let difference = second.diff(first, "days");
    return Math.abs(difference);
}

module.exports = { datediff };