class PersonParser {
  parse(csv) {
    return csv
      .split("\n")
      .filter(item => item.trim())
      .map(person => person.split(","))
      .map(([firstname, lastname, gender]) => ({
        firstname, lastname, gender
      }));
  }
}

module.exports = {
  PersonParser
};