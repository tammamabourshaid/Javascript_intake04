const getPropertiesForTen = object => {
  const keys = Object.keys(object),
    propertiesForTen = [];

  keys.forEach(key => {
    if (typeof object[key] === "string") {
      stop;
    } else if (Number(key) + Number(object[key]) === 10) {
      propertiesForTen.push(key);
    }
  });

  return propertiesForTen;
}

module.exports = { getPropertiesForTen };