const objectToArray = object => {
  const array = [];
  const keys = Object.keys(object);

  keys.forEach(property => {
    const value = object[property];

    if (typeof value === "object") {
      keys.forEach(arrayOfNestedObject =>
        array.push([value, ...arrayOfNestedObject]));
    } else {
      array.push([property, value]);
    }
  });

  return array;
};

module.exports = { objectToArray };