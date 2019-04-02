const getProperty = (object, string) => {
  const isFirstStringUpperCased = string[0].toUpperCase() + string.slice(1),
    value = Object.values(object);

  return string === isFirstStringUpperCased ? value[0] : value[1];
}

module.exports = { getProperty };