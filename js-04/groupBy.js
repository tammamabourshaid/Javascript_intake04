const groupBy = (obj, groupFn) => {
  const grouped = {};
  obj.map(el => [el, groupFn(el)]).map(([original, country]) => {
    (!grouped[country]) ? grouped[country] = [] : '';
    (groupFn(original) === country) ? grouped[country].push(original) : '';
  });
  return grouped;
};

const cities = [
  { name: "Vienna", country: "Austria" },
  { name: "Beijing", country: "China" },
  { name: "München", country: "Germany" },
  { name: "Xi'an", country: "China" },
  { name: "Mannheim", country: "Germany" },
  { name: "Lübeck", country: "Germany" }
];
groupBy(cities, city => city.country.toLowerCase());
module.exports = {
  groupBy
};