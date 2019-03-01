
function getMinMaxNumber(array) {
    const minMax = [],
        min = Math.min(...array),
        max = Math.max(...array);

    minMax.push(min);
    minMax.push(max);

    return minMax;
}

//second solution

function getMinMaxNumber(values) {
    let maxNumber = values[0];
    let minNumber = values[0];
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
  
      if (value > maxNumber) {
        maxNumber = value;
      }
      if (value < minNumber) {
        minNumber = value;
      }
    }
  
    return [minNumber, maxNumber];
  }


module.exports = { getMinMaxNumber };

