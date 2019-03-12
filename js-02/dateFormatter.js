
function dateFormatter(anyDate) {

    const date = new Date(anyDate);
    month = date.getMonth() + 1,
        monthString = month.toString(),
        correctMonth = monthString.padStart(2, '0'),

        day = date.getDate(),
        dayString = day.toString(),
        correctDay = dayString.padStart(2, '0'),

        minutes = date.getMinutes(),
        minutesString = minutes.toString(),
        correctMinutes = minutesString.padStart(2, '0'),

        correctDate = date.getFullYear() + "-" + correctMonth + "-" + correctDay + " " +
        date.getHours() + ":" + correctMinutes;



    return correctDate;
}

module.exports = { dateFormatter };



//other solution
// function dateFormatter(date) {
//     const pad = number => number.toString().padStart(2, 0);

//     return (
//       date.getFullYear() +
//       "-" +
//       pad(date.getMonth() + 1) +
//       "-" +
//       pad(date.getDate()) +
//       " " +
//       date.getHours() +
//       ":" +
//       pad(date.getMinutes())
//     );
//   }
