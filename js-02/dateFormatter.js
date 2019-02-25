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
    monthString = month.toString(),
    correctMonth = monthString.padStart(2, "0");

  return correctMonth;
};

const getDay = date => {
  const day = date.getDate(),
    dayString = day.toString(),
    correctDay = dayString.padStart(2, "0");

  return correctDay;
};

const getMinutes = date => {
  const minutes = date.getMinutes(),
    minutesString = minutes.toString(),
    correctMinutes = minutesString.padStart(2, "0");

  return correctMinutes;
};

const getCorrect = (year, month, day, hours, minutes) => {
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

module.exports = { dateFormatter };
