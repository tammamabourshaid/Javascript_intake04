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
  
//recursive function
// to check if the 2nd one is an array and cal the first function again