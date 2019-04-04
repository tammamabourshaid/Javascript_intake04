function getPropertiesDepth(object) {
  const returner = {};
  for (let property in object) {
    returner[property] = getDepth(object[property], 1);
  }

  return returner;
}

const getDepth = function(object, currentDepth) {
  if (typeof object === "object") {
    const depths = [];
    for (let property in object) {
      depths.push(getDepth(object[property], currentDepth + 1));
    }
    return Math.max(...depths);
  } else {
    return currentDepth;
  }
};

module.exports = { getPropertiesDepth };
