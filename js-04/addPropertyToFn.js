const addPropertyToFn = (fn, ...props) => {
  return fn[props[0]] = props[1];
};

module.exports = {
  addPropertyToFn
};

