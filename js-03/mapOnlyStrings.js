const mapOnlyStrings = (array, condition) => {
  const transformed = array.map(element =>
    (typeof element === "string" ? condition(element) : element))

  return transformed;
};

module.exports = { mapOnlyStrings };