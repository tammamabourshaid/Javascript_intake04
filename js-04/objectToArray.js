const objectToArray = (object) => {
  const array = [];
  for (const prop in object) {
    if (typeof object[prop] === "object") {
      objectToArray(object[prop]).map(el => array.push([prop, ...el]));
    } else {
      array.push([prop, object[prop]]);
    }
  }
  return array;
};


module.exports = {
  objectToArray
};