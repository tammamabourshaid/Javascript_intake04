class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    introduce() { return "My name is " + this.firstname + " " + this.lastname + "." }
}
const augustin = new Person("Ferdinand", "Augustin")
augustin.introduce()
class Musician extends Person {
    constructor(firstname, lastname, instrument) {
        super(firstname, lastname);
        this.instrument = instrument;
    }
    introduce() {
        return `${super.introduce()} I play the ${this.instrument}`;
    }
}
const buchbinder = new Musician("Rudolf", "Buchbinder", "piano");

module.exports = { Person };