class Person {

    constructor(firstname, lastname, birthDate) {//it is not required to provide all args to make an instance
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
        this.father;
        this.mother;
        this.parents = [];
        this.children = [];
        this.siblings = [];
    }

    getFirstname() {
        return this.firstname;
    }

    getParents() {
        return [this.mother, this.father];
    }

    getChildren() {
        return this.children.sort((a, b) => a.birthDate - b.birthDate);
    }

    getSiblings() {
        return this.siblings.sort((a, b) => a.birthDate - b.birthDate);
    }

    setFather(father) {
        this.father = father;
        this.parents.push(father);
        father.children.push(this);
        return this.father;
    }

    setMother(mother) {
        this.mother = mother;
        this.parents.push(mother);
        mother.children.push(this);
        return this.mother;
    }

    addChild(child) {
        if (this.children.length > 0) {
            this.children.forEach(kid => {
                kid.siblings.push(child);
            });
            child.siblings.push(...this.children);  //push output is length
        }
        return child.setMother(this);
    }
}

module.exports = { Person };