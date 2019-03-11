function flatten(currentArray, flattenedArray = []) {
  for (let i = 0; i < currentArray.length; i++) {
    const currentElement = currentArray[i];
    if (Array.isArray(currentElement)) {
      flattenedArray = flatten(currentElement, flattenedArray);
    } else {
      flattenedArray.push(currentElement);
    }
  }

  return flattenedArray;
}

module.exports = { flatten };
