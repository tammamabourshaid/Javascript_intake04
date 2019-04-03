let request = require("request");
let _ = require("lodash");

//requested json file and transformed it in js object

request("https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population-density.json",
    function (error, response, body) {
        //console.log("error: ", error);
        //console.log("statusCode: ", response && response.statusCode);
        const parsed = JSON.parse(body);


//removed elements with null density values

        let withoutFalsies = [];

        parsed.forEach(element => {
            if (element.density !== null) {
                withoutFalsies.push(element);
            }
        });


//parsed elements string density into number 

        withoutFalsies.forEach(element => {
            if (typeof element.density === "string")
                element.density = parseFloat(element.density);

        });


//sorted elements by increasing density and got top 3 min density

        let sorted = _.sortBy(withoutFalsies, [function (object) { return object.density }]);
        sorted = _.remove(sorted, function (object) { return object.density > 0 });
        console.log("Top three countries with minimal population density:\n", _.slice(sorted, [0], [3]));


//sorted elements by decreasing density and got top 3 max density

        let reversed = _.reverse(sorted);
        console.log("Top three countries with maximal population density:\n", _.slice(reversed, [0], [3]));
    });

