const groupBy = (array, fn) => {
  const object = {};

  array.forEach(element => {
    const values = fn(element);
    if (typeof object[values] === "undefined") {
      object[values] = [];
      object[values].push(element);
    } else {
      object[values].push(element);
    }
  });

  return object;
}

module.exports = { groupBy };