function dateFormatter(date) {
    // date = new Date();
    let day = date.getDate();
    let monthIndex = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    if (day < 10) {
        day = '0' + day;
    }
    if (monthIndex < 10) {
        monthIndex = '0' + monthIndex;
    }


    return year + '-' + monthIndex + '-' + day + ' ' + hour + ":" + minute + seconds;
}
module.exports = { dateFormatter };