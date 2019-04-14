const { temperatures } = require('../advanced/temperatures'),
  { getAverage } = require('./average');

const avgPerDay = () => getAverage(temperatures);

module.exports = { avgPerDay };