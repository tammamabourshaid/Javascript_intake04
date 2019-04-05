let moment = require("moment");

const datediff = function (dateOne, dateTwo) {

    const wrapperDateOne = moment(dateOne).format("YYYY-MM-DD");
    const wrapperDateTwo = moment(dateTwo);
    let difference = wrapperDateTwo.diff(wrapperDateOne, "days");
    return Math.abs(difference);
}

module.exports = { datediff }