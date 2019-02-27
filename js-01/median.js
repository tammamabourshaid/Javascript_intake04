function getMedian(values) {
    values.sort(sort);
    if (values.length % 2 === 0) {
      const left = values.length / 2;
      return (values[left - 1] + values[left]) / 2;
    } else {
      return values[values.length / 2 - 0.5];
    }
  }
  
  module.exports = { getMedian };