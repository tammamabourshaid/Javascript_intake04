const getDifference = (array1, array2) => {
    const sortedArray1 = sort(array1),
          sortedArray2 = sort(array2),
          concatednatedArray = sortedArray1.concat(sortedArray2),
          sortedConcatednatedArray = sort(concatednatedArray),
          unique = [... new Set(sortedConcatednatedArray)];
          console.log(unique);
          return unique;
};

const sort = array => {
    const sorted = array.sort((first, second) => first - second);
    return sorted;
};

module.exports = { getDifference };