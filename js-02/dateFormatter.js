const dateFormatter = someDate => {
    const date = new Date(someDate),
        month = getMonth(date),
        day = getDay(date),
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = getMinutes(date),
        correctDate = getCorrect(year, month, day, hours, minutes);

    return correctDate;
};

const getMonth = date => {
    const month = date.getMonth() + 1,
        correctMonth = month < 10 ? "0" + month : "" + month;
    return correctMonth;
};

const getDay = date => {
    const day = date.getDate(),
        correctDay = day < 10 ? "0" + day : "" + day;
    return correctDay;
};

const getMinutes = date => {
    const minutes = date.getMinutes(),
        correctMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
    return correctMinutes;
};

const getCorrect = (year, month, day, hours, minutes) => {
    return `${year}-${month}-${day} ${hours}:${minutes}`;
};


module.exports = { dateFormatter };