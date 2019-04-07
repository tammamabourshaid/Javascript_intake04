const axios = require("axios");
const lodash = require("lodash");

async function getCountries() {
    let countries = await axios.get("https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population-density.json");
    const ordered = lodash.sortBy(countries.data, (country) => parseFloat(country.density));
    const smallest = ordered.slice(0, 3);
    const filtered = lodash.filter(ordered, (country) => country.density !== null);
    console.log("The biggest density");
    console.log(filtered.slice(-3));
    console.log("The smallest density")
    console.log(smallest);

}

getCountries();