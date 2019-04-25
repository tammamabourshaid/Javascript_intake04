function sortBy(array, fn) {
 return array.sort((a, b) => (fn(a) > fn(b) ? 1 : -1));
}

module.exports = { sortBy };
