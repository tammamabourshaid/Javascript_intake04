class PropertyRemover {
    constructor() {
        this.propertyToBeRemoved = [];
    }
    addPropertyToBeRemoved(eini) {
        if (Array.isArray(eini)) {
            this.propertyToBeRemoved.push(...eini);
            console.log('yes');
        } else {
            this.propertyToBeRemoved.push(eini)
            console.log('no');
        }

    }
    process(mensch) {
        //        console.log(this.propertyToBeRemoved);
        //        console.log(eini[this.propertyToBeRemoved]);
        //        console.log(this.propertyToBeRemoved);
        for (let i = 0; i < this.propertyToBeRemoved.length; i++) {
            delete mensch[this.propertyToBeRemoved[i]];
        }
        return mensch;
    }
}
/*
const person = { firstname: "Mel", lastname: "Gibson" };
const propertyRemover = new PropertyRemover();
propertyRemover.addPropertyToBeRemoved("lastname");
const removedPerson = propertyRemover.process(person);
console.log(removedPerson);
*/
/*
const austria = {
    population: 8773000,
    capital: "Vienna",
    size: 83879
};
const propertyRemover = new PropertyRemover();
propertyRemover.addPropertyToBeRemoved("population");
propertyRemover.addPropertyToBeRemoved("size");
const onlyVienna = propertyRemover.process(austria);
*/
/*
const austria = {
    population: 8773000,
    capital: "Vienna",
    size: 83879
  };
  const propertyRemover = new PropertyRemover();
  propertyRemover.addPropertyToBeRemoved(["population", "size"]);
  const onlyVienna = propertyRemover.process(austria);
*/
/*
const austria = {
    population: 8773000,
    capital: "Vienna",
    size: 83879
  };

  const germany = {
    population: 82790000,
    capital: "Berlin",
    size: 357386
  };

  const propertyRemover = new PropertyRemover();
  propertyRemover.addPropertyToBeRemoved(["population", "size"]);
  const onlyVienna = propertyRemover.process(austria);
  const onlyBerlin = propertyRemover.process(germany);
*/

console.log(onlyVienna);
console.log(onlyBerlin);
