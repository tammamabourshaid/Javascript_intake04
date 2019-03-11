class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    introduce() {
        return `My name is ${this.firstName} ${this.lastName}.`;
    }


}


module.exports = { Person };