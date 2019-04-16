const { deleteProperty } = require('../js-04/deleteProperty.js');

class PropertyRemover {
  constructor() {
    this.array = []; this.object; this.property;
  }

  addPropertyToBeRemoved(property) {
    if (Array.isArray(property)) {
      this.array = property;
    }
    const propertyToRemove = this.property = property;
    this.array.push(propertyToRemove);
  }

  process(object) {
    const values = Object.values(object),
      original = this.object = object,
      properties = this.array,
      copyOfObject = Object.assign({}, original);

    properties.forEach(element => deleteProperty(copyOfObject, element))

    if (properties.toString() === values.toString()) {
      throw Error();
    }

    return copyOfObject;
  }
}

module.exports = { PropertyRemover };