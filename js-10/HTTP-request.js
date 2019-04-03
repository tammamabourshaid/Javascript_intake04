const request = require('request');

request('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population-density.json', (error, response, body) => {

  const countries = JSON.parse(body);

  const top3MostDenseCountries = countries
    .sort((country1, country2) => country2.density - country1.density)
    .splice(0, 3);
  console.log('Most dense countries:');
  console.log(top3MostDenseCountries);

  console.log('------');

  const top3LeastDenseCountries = countries
    .sort((country1, country2) => country1.density - country2.density)
    .filter(country => country.density !== null && country.density !== '0')
    .splice(0, 3);

  console.log('Least dense countries:');
  console.log(top3LeastDenseCountries);
});