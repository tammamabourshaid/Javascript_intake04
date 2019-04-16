const objectToArray = object => {
  const array = [],
    keys = Object.keys(object);

  keys.forEach(property => {
    const value = object[property];

    if (typeof value === "object") {
      objectToArray(value).map(arrayOfNestedObject =>
        array.push([property, ...arrayOfNestedObject]));
    } else {
      array.push([property, value]);
    }
  });

  return array;
};

module.exports = { objectToArray };