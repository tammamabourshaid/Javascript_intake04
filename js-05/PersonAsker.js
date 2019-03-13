class PersonAsker {
  constructor(readLineFn) {
    this.readLineFn = readLineFn;
    this.name = "";
    this.country = "";
  }

  async ask() {
    const fullName = this.readLineFn("What is your name?");
    await fullName.then(name => this.name += name);

    const country = this.readLineFn("Where do you come from?");
    await country.then(country => this.country += country);
  }

  getInfo() {
    return this.name + " is from " + this.country;
  }
}

module.exports = { PersonAsker };