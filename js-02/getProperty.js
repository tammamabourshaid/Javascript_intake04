const getProperty = (object, property) => {
  return property.split('.').reduce((a, b) => a&&a[b] || null, object);
  /* FOR EXPLAINING THE ABOVE || EASIER TO UNDERSTAND */
  // return property.split(".").reduce((a, b) => {
  //   if(a && a[b]) {
  //     return a[b];
  //   }
  //   return null;
  // }, object);
};

module.exports = {
  getProperty
}