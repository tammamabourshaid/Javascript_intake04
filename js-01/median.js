const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  let result;
  if (sorted.length % 2 !== 0) {
    result = sorted[Math.floor(sorted.length / 2)]
  } else {
    const median = (Math.floor(sorted.length / 2) - 1)
    const nextToMedian = (Math.floor(sorted.length / 2))
    result = ((sorted[median] +  sorted[nextToMedian]) / 2)
  }
  return result
}

module.exports = {
  getMedian
}