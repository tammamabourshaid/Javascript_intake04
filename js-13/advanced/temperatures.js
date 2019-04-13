const fs = require('fs'),
  path = '/home/adib/i4-frontend-specialisation/js-13/advanced/weather.json',
  file = fs.readFileSync(path),
  parsed = JSON.parse(file);

const day25 = parsed
  .slice(0, 24)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day25Fixed = Number(day25.toFixed(2));

const day26 = parsed
  .slice(24, 48)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day26Fixed = Number(day26.toFixed(2));

const day27 = parsed
  .slice(48, 72)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day27Fixed = Math.round(day27);

const day28 = parsed
  .slice(72, 96)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day28Fixed = Number(day28.toFixed(2));

const day29 = parsed
  .slice(96, 120)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day29Fixed = Number(day29.toFixed(2));

const day30 = parsed
  .slice(120, 144)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day30Fixed = Number(day30.toFixed(2));

const day31 = parsed
  .slice(144, 168)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day31Fixed = Number(day31.toFixed(2));

const day1 = parsed
  .slice(168, 192)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day1Fixed = Number(day1.toFixed(2));

const day2 = parsed
  .slice(192, 216)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day2Fixed = Number(day2.toFixed(2));

const day3 = parsed
  .slice(216, 240)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day3Fixed = Number(day3.toFixed(2));

const day4 = parsed
  .slice(240, 264)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day4Fixed = Number(day4.toFixed(2));

const day5 = parsed
  .slice(264, 288)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day5Fixed = Number(day5.toFixed(2));

const day6 = parsed
  .slice(288, 312)
  .map(line => line.Temperature)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 24;
const day6Fixed = Number(day6.toFixed(2));

const temperatures = [
  day25Fixed, day26Fixed, day27Fixed,
  day28Fixed, day29Fixed, day30Fixed,
  day31Fixed, day1Fixed, day2Fixed,
  day3Fixed, day4Fixed, day5Fixed,
  day6Fixed
];

module.exports = { temperatures };