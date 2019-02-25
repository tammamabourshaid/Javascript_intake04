const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  let result;
  if (sorted.length % 2 == 0) {
    const median = (Math.floor(sorted.length / 2) - 1);
    const nextToMedian = (Math.floor(sorted.length / 2));
    return ((sorted[median] +  sorted[nextToMedian]) / 2);
  }
  return sorted[Math.floor(sorted.length / 2)];
}

module.exports = {
  getMedian
}