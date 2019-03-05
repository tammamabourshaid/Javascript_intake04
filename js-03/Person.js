class Person {
    constructor(firstName, lastName, date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
        this.father = "";
        this.mother = "";
        this.child = [];
 
    }
    getFirstname() {
        return this.firstName;
    }
    getBirthdate() {
        return this.date;
    }
    setFather(name) {
        this.father = name;
    }
    setMother(name) {
        this.mother = name;
    }
    addChild(name) {
        this.child.push(name);
    }
    getChildren() {
        return this.child.sort((child1, child2) => child1.getBirthdate() - child2.getBirthdate());
    }
    getSiblings() {
        return this.mother.child;
    }
    getParents() {
        return [this.mother, this.father];
    }
 
 
 }
 module.exports = {
    Person
 };