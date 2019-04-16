let moment = require('moment');

const datediff = (date1, date2) => {
    const firstDate = moment(date1).format('YYYY-MM-DD');
    const secondDate = moment(date2);
    let difference = secondDate.diff(firstDate, 'days');
        return Math.abs(difference);
};

module.exports = {datediff};