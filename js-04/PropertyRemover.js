class PropertyRemover {
  constructor() {

  }

  addPropertyToBeRemoved(object, property) {
    return delete object[property];
  }

  process() {
    return;
  }
}

module.exports = { PropertyRemover };