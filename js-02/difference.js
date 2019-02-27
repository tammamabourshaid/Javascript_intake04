function getDifference(array1, array2) {
    let array3 = [];
    for (i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) { array3.push(array1[i]) }
    }
      for (j = 0; j < array2.length; j++) {
        if (!array1.includes(array2[j])) { array3.push(array2[j]) }
    }
  return array3;
}
module.exports = { getDifference };