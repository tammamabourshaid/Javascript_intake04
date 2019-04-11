const getPropertiesDepth = object => {
  const propertiesDepth = {};

  for (const property in object) {
    propertiesDepth[property] = getDepth(object[property], 1);
  }

  return propertiesDepth;
}

const getDepth = (object, currentLevel) => {
  if (typeof object === "object") {
    const depths = [],
      keys = Object.keys(object);

    keys.forEach(property => {
      const depth = getDepth(object[property], currentLevel + 1)
      depths.push(depth);
    });

    return Math.max(...depths);
  } else {
    return currentLevel;
  }
}

module.exports = { getPropertiesDepth };