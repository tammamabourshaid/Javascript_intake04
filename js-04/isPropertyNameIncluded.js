const isPropertyNameIncluded = (properties, values) => {
  const propertiesString = properties.toString(),
    valuesString = values.toString();

  if (propertiesString === valuesString) {
    throw Error();
  }
};

module.exports = { isPropertyNameIncluded };