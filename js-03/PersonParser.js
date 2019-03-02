class PersonParser {
  constructor() { }

  parse(csv) {
    const split = csv.split("\n"),
      parse = split
        .map(element => element.split(" "))
        .filter(element => !element.includes(""))
        .map(element => [element].toString().split(","))
        .map(element => transformIntoPerson(element));

    return parse;
  }
}

const transformIntoPerson = object => {
  const person = {
    firstname: object[0],
    lastname: object[1],
    gender: object[2]
  };

  return person;
}

module.exports = { PersonParser };