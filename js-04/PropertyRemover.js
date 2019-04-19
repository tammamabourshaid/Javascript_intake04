const { deleteProperty } = require('../js-04/deleteProperty.js'), { isPropertyNameIncluded } = require('../js-04/isPropertyNameIncluded.js');

class PropertyRemover {
  constructor() {
    this.properties = []; this.object; this.property;
  }

  addPropertyToBeRemoved(property) {
    if (Array.isArray(property)) {
      this.properties = property;
    }
    const propertyToRemove = this.property = property;
    this.properties.push(propertyToRemove);
  }

  process(object) {
    const values = Object.values(object),
      originalObject = this.object = object,
      properties = this.properties,
      copyOfObject = Object.assign({}, originalObject),
      propertiesString = properties.toString(),
      valuesString = values.toString();

    isPropertyNameIncluded(propertiesString, valuesString);

    properties.forEach(element => deleteProperty(copyOfObject, element));

    return copyOfObject;
  }
}

module.exports = { PropertyRemover };