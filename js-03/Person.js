class Person {
  constructor(fname, lname, birthdate) {
    this.fname = fname;
    this.lname = lname;
    this.birthdate = birthdate;
    this.father = {};
    this.mother = {};
    this.parents = [];
    this.children = [];
  }
  getFirstname() {
    return this.fname;
  }
  getBirthdate() {
    return this.birthdate;
  }
  getParents() {
    return [this.mother, this.father];
  }
  getSiblings() {
    return this.mother.children;
  }
  setFather(father) {
    this.father = father;
  }
  setMother(mother) {
    this.mother = mother;
  }
  getChildren() {
    return this.children.sort((child1, child2) => child1.getBirthdate() - child2.getBirthdate());
  }
  addChild(child) {
    this.children.push(child);
  }
  
}
const fritz = new Person("Fritz", "Huber");
const gernot = new Person("Gernot", "Huber");
const maria = new Person("Maria", "Huber");
fritz.setFather(gernot);
fritz.setMother(maria);
fritz.getParents();

module.exports = {
  Person
};