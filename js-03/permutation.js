const permutate = anyArray => {
  let result = [];

  const permute = (array, element = []) => {
    const size = array.length;

    if (size === 0) { result.push(element) }

    for (let index = 0; index < size; index++) {
      let currentElement = array.slice(),
        nextElement = currentElement.splice(index, 1);
      permute(currentElement.slice(), element.concat(nextElement));
    }
  };

  permute(anyArray);

  return result;
};

module.exports = { permutate };