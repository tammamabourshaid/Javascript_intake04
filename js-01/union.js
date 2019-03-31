function getUnion(array1, array2) {
  const sortedArray1 = array1.sort((e1, e2) => {
    return e1 - e2
  });
  const sortedArray2 = array2.sort((e1, e2) => {
    return e1 - e2
  });
  const unionNumbers = sortedArray1.filter(number => sortedArray2.includes(number));
  console.log(unionNumbers)
  return unionNumbers;

}

//second solution

function getUnion(array1, array2) {
  const unions = [];
  for (i = 0; i < array1.length; i++) {
    const currentElement = array1[i];
    for (j = 0; j < array2.length; j++) {
      if (array2[j] === currentElement) {
        unions.push(currentElement);
        break;
      }
    }
  }

  unions.sort();
  return unions;
}

module.exports = {
  getUnion
};