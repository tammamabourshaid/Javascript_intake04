const axios = require("axios");
const _ = require("lodash");
const moment = require("moment");

async function getCountries() {
    let countries = await axios.get("https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population-density.json");
    const ordered = _.sortBy(countries.data, (country) => parseFloat(country.density));
    const smallest = ordered.slice(0, 3);
    const filtered = _.filter(ordered, (country) => country.density !== null);
    console.log("The biggest density");
    console.log(filtered.slice(-3).reverse());
    console.log("The smallest density")
    console.log(smallest);

}
getCountries();