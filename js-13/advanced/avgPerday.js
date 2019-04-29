const fs = require("fs");
const _ = require("lodash");

async function avgPerDay() {
  const data = await getData();
  const parsedData = parse(data);
  const groupedDataPerDay = groupData(parsedData);
  const averagePerDay = calculateData(groupedDataPerDay);

  return averagePerDay;
}

///////////////////////////////////////////////////
function calculateData(groupedDataPerDay) {

  for (let day in groupedDataPerDay) {
    const lineValues = groupedDataPerDay[day];
    const tempratures = lineValues
      .map(line => line.pop())
      .map(temprature => parseFloat(temprature));
      
    groupedDataPerDay[day] = _.round(_.mean(tempratures), 2);
    
  }
  return groupedDataPerDay;
}
///////////////////////////////////////////////////
function groupData(parsedData) {
  return _.groupBy(parsedData, function(lineData) {
    return lineData[0] + "-" + lineData[1] + "-" + lineData[2];
  });
}

///////////////////////////////////////////////////
function parse(data) {
  return data
    .split("\r\n")
    .filter((line, ix) => ix > 0)
    .filter(line => line.length > 0)
    .map(line => line.split(";"));
}

///////////////////////////////////////////////////
function getData() {
  return new Promise(resolve =>
    fs.readFile(
      "C:/Users/Marj/Desktop/Front-end/i4-frontend-specialisation/js-13/advanced/history_export_2019-04-07T06_40_00.csv",
      "utf8",
      (err, data) => resolve(data)
    )
  );
}

module.exports = { avgPerDay };
