const toPairs = city => {
  const population = ["population", city.population],
    size = ["size", city.size],
    pair = [population, size];

  return pair;
};

module.exports = { toPairs };
