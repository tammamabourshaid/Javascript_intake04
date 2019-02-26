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



//comments for myself
//i used the getMonth +1 because months start with 0
//i used a condition to check if the month or day is <=9 so that it prints a 0 before the number
