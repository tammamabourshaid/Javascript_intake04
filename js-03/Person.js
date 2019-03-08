class Person{
   constructor (firstname, lastname, date) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.date = new Date(date);
    this.father = "";
    this.mother = "";
    this.arrayChild = [];
}
getFirstname () {
    return this.firstname;
}
setFather (name) {
     this.father = name;
}
setMother (name) {
    this.mother = name;
}
getParents  () {
    return [this.mother, this.father];
}
addChild (childName) {
     this.arrayChild.push(childName);
}
getSiblings  () {
    return this.mother.arrayChild;
}
getBirthday  () {
    return this.date;
}
getChildren  () {
    return this.arrayChild.sort((child1,child2)=>child1.getBirthday()-child2.getBirthday());
}
}

module.exports = { Person };