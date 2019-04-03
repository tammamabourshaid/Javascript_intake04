let requestHttp = require("request");
let lodash = require("lodash");

requestHttp('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population-density.json',
    function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log(body); // Print the HTML for website.
        const parsed = JSON.parse(body);

        let countries = [];
        parsed.forEach(object => {
            if (object.density !== null) {
                countries.push(object);
            }
        });
        //console.log(countries);

        countries.forEach(element => {
            if (typeof element.density === "string")
                element.density = parseFloat(element.density);

        });

        let sorted = lodash.sortBy(countries, [function (object) {
            return object.density
        }]);

        let ordered = lodash.orderBy(countries, (country) => country.density, ['desc']);
        //console.log(ordered)
        sorted = lodash.remove(sorted, function (object) {
            return object.density > 0
        });
        console.log("top 3 most dense countries:\n", ordered.slice(0, 3));

        //console.log("top 3 least dense countries:\n", lodash.slice (sorted.reverse(), [0], [3]));
        ordered.reverse();
        console.log("top 3 least dense countries:\n", ordered.slice(0, 3));
    });