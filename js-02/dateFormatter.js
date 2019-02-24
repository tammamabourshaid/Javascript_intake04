function dateFormatter(date) {


    let month = date.getMonth() + 1;
    if (month <= 9)
        month = '0' + month;

    let day = date.getDate();
    if (day <= 9)
        day = '0' + day;

    return date.getFullYear() + "-" + month + "-" + day + " " + date.getHours() + ":" + date.getMinutes() + "0";
}
module.exports = { dateFormatter };