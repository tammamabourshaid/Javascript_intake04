const reduce = (array, fn) => {
  const reversed = array.reverse(),
    reduced = reversed.reduceRight(fn);

  return reduced;

};

module.exports = { reduce };