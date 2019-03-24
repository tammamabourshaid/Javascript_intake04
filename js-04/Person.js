class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    introduce() {
        return `My name is ${this.firstname} ${this.lastname}.`
    }
}


class Musician extends Person {
    constructor(firstname, lastname, instrument) {
        super(firstname, lastname);
        this.instrument = instrument;
    }
    introduce() {
        return `My name is  ${this.firstname} ${this.lastname}. I play the ${this.instrument}.`
    }
}
module.exports = { Person };