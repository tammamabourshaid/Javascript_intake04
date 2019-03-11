
class PersonParser {
  textReading(object) {
    const person = {
      firstname: object[0],
      lastname: object[1],
      gender: object[2]
    };
    //console.log("person", person);

    return person;
  }
  parse(csv) {
    const result = csv.split('\n')
      .map(element => element.split(" "))
      .filter(element => !element.includes(""))
      .map(element => [element].toString().split(","))
      .map(element => this.textReading(element));
    console.log(result);
    
      return result;
  }
}

module.exports = { PersonParser };