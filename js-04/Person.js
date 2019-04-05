class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;

    }

    introduce() {
        return "My product is " + this.firstname + " " + this.lastname + ".";
    }
}

module.exports = { Person };