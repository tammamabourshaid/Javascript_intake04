class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;

        this.parents = [];
        this.children = [];
    }

    getFirstname() {
        return this.firstName;
    }

    setMother(name) {
        return this.parents.unshift(name);
    }

    setFather(name) {
        return this.parents.push(name);
    }

    getParents() {
        return this.parents;
    }

    addChild(name) {
        return this.children.push(name);
    }

    getSiblings() {
        return this.parents[0].children.sort((child1, child2) =>
            (child1.dateOfBirth - child2.dateOfBirth));
    }

    getChildren() {
        return this.children.sort((child1, child2) => {
            return child1.dateOfBirth - child2.dateOfBirth;
        });
    }
}
const fritz = new Person("Fritz", "Huber");
const gernot = new Person("Gernot", "Huber");
const maria = new Person("Maria", "Huber");

fritz.setFather(gernot);
fritz.setMother(maria);

console.log(fritz)
module.exports = { Person };