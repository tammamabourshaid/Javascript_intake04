class Person {

    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;

        this.parents = [];
        this.children = [];
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

    getFirstname() {
        return this.firstName;
    }

    addChild(name) {
        return this.children.push(name);
    }

    getChildren() {
        return this.children.sort((child1, child2) => {
            return child1.dateOfBirth - child2.dateOfBirth
        });
    }

    getSiblings() {
        return this.parents[0].children.sort((child1, child2) => {
            return child1.dateOfBirth - child2.dateOfBirth;
        });
    }
}

module.exports = { Person };