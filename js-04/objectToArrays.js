
const objectToArray = () => {
    const nested = {
        europe: {
            austria: {
                population: 8773000,
                capital: "Vienna",
                size: 83879
            },
            france: {
                population: 66991000,
                capital: "Paris",
                size: 643801
            },
            germany: {
                population: 82790000,
                capital: "Berlin",
                size: 357386
            },
            italy: {
                population: 60483973,
                capital: "Rome",
                size: 301338
            }
        }
    }



    // const nested = {
    //     objectToArray1: { firstname: "Hugo", lastname: "Schmidt" },
    //     obj: { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0 },
    //     peopleObj : {
    //         jim: {name: "jim", age: 20},
    //         tim: {name: "tim",age: 22}}
    //     }
    // result = Object.keys(nested).map(function (key) {
    //         //return [String(key), nested[key]];
    //         console.log(Object.values(nested));

    const nested2 = Object.entries(nested);
    nested2.forEach(function (nest, i) {

        [contenant, country, capital, population,count] = nest
        //flights.shift(0); 
        // flights.pop(1);

        console.log(`${i + 1}.A flight from ${contenant} to ${country} at${capital} po ${population}co ${count} `);
    }); return Object.values(nested2[0]);
    //const nested = nested.splice(0, 5)
}

// console.log(Object.values(result));

console.log(objectToArray());

module.exports = { objectToArray }




    // const peopleObj = {
    //     jim: {
    //         name: "jim",
    //         age: 20
    //     },
    //     tim: {
    //         name: "tim",
    //         age: 22
    //     }
    // }
    // const peopleArray = Object.values(peopleObj)
    // console.log(peopleArray);
