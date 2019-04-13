const { temperatures } = require('../advanced/temperatures'),
  { getAverage } = require('./average');

const avgPerDay = () => {
  return getAverage(temperatures);
};

module.exports = { avgPerDay };