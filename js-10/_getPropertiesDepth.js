function getPropertiesDepth(object) {
  const returner = {};
  for (let property in object) {
    returner[property] = getDepth(object[property],1);
  }

  return returner;
}

const getDepth = function(object,currentDepth) {
  if (typeof object === "object") {
    const depths = [];
    for (let property in object) {
      depths.push(getDepth(object[property], currentDepth +1));
    }
    return Math.max(...depths);
  } else {
    return currentDepth;
  }
};

<<<<<<< HEAD:js-10/getPropertiesDepth.js
const europe = {
  austria: {
    population: 8773000,
    capital: "Vienna",
    size: 83879,
  }
};

console.log(getPropertiesDepth(europe));

=======
>>>>>>> 991b82c9720ccb3cc7b8ba0c623e342ec120908a:js-10/_getPropertiesDepth.js
module.exports = { getPropertiesDepth };
