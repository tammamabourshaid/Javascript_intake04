class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  introduce() {
    const introduce = `My name is ${this.firstname} ${this.lastname}.`;

    return introduce;
  }

}

module.exports = { Person };