const getDigitProperties = (obj) => {
  const digitProps = [];
  for (const prop in obj) {
    (prop.match(/\d/)) ? digitProps.push(prop) : '';
  }
  return digitProps;
};
module.exports = {
  getDigitProperties
};