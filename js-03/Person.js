class Person {
    constructor(firstName, lastName, date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
        this.father = [];
        this.mother = [];
        this.child = [];

    }
    getFirstName() {
        return this.firstName;
    }
    setFather(name) {
        this.father += name;
    }
    setMother(name) {
        this.mother += name;
    }
    addChild(name) {
        this.child += name;
    }
    getChildren() {
        return this.child;
    }
    getSiblings() {
        return this.child;
    }
    getParents(){
        return this.father,this.mother;
    }

}
module.exports = {
    Person
};

// it did not work
//should I keep track of the children in the constructer inside an array? or is there a better way?