const rest = array => {
  const size = array.length,
    transformed = array.splice(1, size);

  return transformed;
};

module.exports = { rest };