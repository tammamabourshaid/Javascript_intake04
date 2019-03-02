const mapOnlyStrings = (array, condition) => {
  const transformed = array.map(condition);

  return transformed;
};

module.exports = { mapOnlyStrings };