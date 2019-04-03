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
    return depths.length;
  } else {
    return currentDepth;
  }
};

const europe = {
  austria: {
    population: 8773000,
    capital: "Vienna",
    size: 83879
  }
};

console.log(getPropertiesDepth(europe));

module.exports = { getPropertiesDepth };
