class Person {
  constructor(firstname, lastname, birthdate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.children = [];
    this.father = null;
    this.mother = null;
  }

  getFirstname() {
    return this.firstname;
  }

  getLastname() {
    return this.lastname;
  }

  setFather(father) {
    this.father = father;
  }

  setMother(mother) {
    this.mother = mother;
    mother.addChild(this);
  }

  getBirthdate() {
    return this.birthdate;
  }

  addChild(child) {
    if (!this.children.includes(child)) {
      this.children.push(child);
      this.children.sort(
        (child1, child2) => child1.getBirthdate() - child2.getBirthdate()
      );
    }
  }

  getChildren() {
    return this.children;
  }

  getSiblings() {
    return this.mother.getChildren().filter(child => child !== this);
  }

  getParents() {
    return [this.mother, this.father];
  }
}

module.exports = { Person };
