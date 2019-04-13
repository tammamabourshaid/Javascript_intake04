const { temperatures } = require('../advanced/temperatures'),
  { getAverageTemperaturePerDay } = require('../advanced/averageTemperaturePerDay');

const avgPerDay = () => {
  return getAverageTemperaturePerDay(temperatures);
};

module.exports = { avgPerDay };