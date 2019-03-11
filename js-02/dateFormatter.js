function dateFormatter(date) {
  const pad = number => number.toString().padStart(2, 0);

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    " " +
    date.getHours() +
    ":" +
    pad(date.getMinutes())
  );
}

module.exports = { dateFormatter };
