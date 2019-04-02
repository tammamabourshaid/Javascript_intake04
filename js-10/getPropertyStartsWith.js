const getProperty = (object, string) => {
  const keys = Object.keys(object);

  const property = keys
    .filter(key => key.startsWith(string))
    .map(value => object[value]);

  return property.length === 1 ? property.toString() : property;
}

module.exports = { getProperty };