const mapOnlyStrings = (array, condition) => {
  const transformed = [];

  array.forEach(element => {
    const mapped = condition(element);

    if (typeof mapped !== "string") {
      transformed.push(element)
    } else {
      transformed.push(mapped)
    }
  });

  return transformed;
};

module.exports = { mapOnlyStrings };