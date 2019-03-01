function dateFormatter(givenDate) {

    const year = givenDate.getFullYear();
    const month = givenDate.getMonth() + 1;
    const date = givenDate.getDate();
    const hours = givenDate.getHours();
    const minutes = givenDate.getMinutes();


    return year + "-" + fix(month) + "-" + fix(date) + " " + hours + ":" + fix(minutes);
}

function fix(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

module.exports = { dateFormatter };