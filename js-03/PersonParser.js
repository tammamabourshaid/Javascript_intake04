class PersonParser {
  constructor() { }

  parse(file) {
    let lines = file.split("\n"),
      array = [];
    lines.forEach(line => {
      if (line.length > 0) {
        array.push(line);
      }
      return array;
    });
    array.pop();

    let persons = [];
    for (let position = 0; position < array.length; position++) {
      const element = array[position].split(",");
      persons.push(element);
    }

    let people = [];
    for (let position = 0; position < persons.length; position++) {
      let line = persons[position];
      let badboi = makeObject(line);
      people.push(badboi);
    }
    return people;
  }
}

const makeObject = object => {
  let person = {};
  person.firstname = object[0];
  person.lastname = object[1];
  person.gender = object[2];
  return person;
}

module.exports = { PersonParser };