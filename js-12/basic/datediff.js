const moment = require("moment");

function datediff(firstDate, secondDate) {

    const first = moment(firstDate).format("YYYY-MM-DD");
    const second = moment(secondDate);
    let diffrence= second.diff(first,"days")
    return Math.abs(diffrence);
}
module.exports = {
    datediff
};

//math .abs becuase i got some numbers in minus
//test calculation should not be based on hours failed
//format so that I can use days later,,,, now works