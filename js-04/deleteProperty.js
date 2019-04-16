const deleteProperty = (object, property) => {
  if (typeof property === 'string') {
    property = property.split('.');
  }
  for (let times = 0; times < property.length - 1; times++) {
    object = object[property[times]];
    if (typeof object === 'undefined') {
      return;
    }
  }
  delete object[property.pop()];
};

module.exports = { deleteProperty };