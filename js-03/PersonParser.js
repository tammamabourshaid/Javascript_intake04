
// class PersonParser {
//   textReading(object) {
//     const person = {
//       firstname: object[0],
//       lastname: object[1],
//       gender: object[2]
//     };
//     //console.log("person", person);

//     return person;
//   }
//   parse(csv) {
//     const result = csv.split('\n')
//       .map(element => element.split(" "))
//       .filter(element => !element.includes(""))
//       .map(element => [element].toString().split(","))
//       .map(element => this.textReading(element));
//     console.log(result);
    
//       return result;
//   }
// }

//module.exports = { PersonParser };


class PersonParser {
  constructor() {}

  parse(csv) {
    return csv
      .split("\n")
      .filter(line => line.trim())
      .map(line => line.split(","))
      .map(([firstname, lastname, gender]) => ({firstname,lastname,gender}));
  }
}

module.exports = { PersonParser };