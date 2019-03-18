//   class PropertyRemover {
//      constructor() {

//      }
function PropertyRemover() { }
//addPropertyToBeRemoved() {
PropertyRemover.prototype.bar = { ok: 500 };
var propertyRemover1 = new PropertyRemover();

console.log(propertyRemover1.bar);
console.log(delete propertyRemover1.bar.values);


//  const anyObject = new Object();
// const createACopy = Object.create(anyObject)
// const entries = Object.entries(createACopy);
// const filtered = entries.filter(e => e[property1]);
// console.log(propertyRemover);

// return propertyRemover;

//     process(object) {

//     }
// }

// module.exports = { PropertyRemover };

// const person = { firstname: "Mel", lastname: "Gibson" };
// console.log(person);
// const person1=delete person.shift
// console.log(person1);

// const anyObject = Object.assign(person);
// const entries1 = Object.entries(anyObject);


// const filtered1 = entries1.shift()

// console.log();

// console.log(filtered1);

// const entries = Object.entries(person)
// const filtered = entries.filter(e => e.lastname);
//module.exports = { PropertyRemover };

const person = { firstname: "Mel", lastname: "Gibson" };
console.log(person);
//const person = new PropertyRemover();
person1 = delete person.firstname;

//const removedPerson = propertyRemover.process(person);
console.log(person);

function Foo() { }
Foo.prototype.bar = { ok: 42 };
var foo = new Foo();

// returns true, but with no effect, 
// since bar is an inherited property
delete foo.bar;

// logs 42, property still inherited
console.log(foo.bar);

// deletes property on prototype
delete Foo.prototype.bar;

// logs "undefined", property no longer inherited
console.log(foo.bar);

//module.exports = { PropertyRemover };


var nameObj = { first: "Zaphod", last: "Beeblebrox" };

Object.keys(nameObj).forEach(function (key) {

    console.log(key + ': ' + nameObj[key]);
    console.log();

    console.log(delete Object.value);

});

var countries = {
    China: 1371980000,
    India: 1276860000,
    'United States': 321786000,
    Indonesia: 255461700,
    Brazil: 204873000,
    Pakistan: 190860000
};
countries = Object.keys(countries).filter(function (key) {
    // Countries under 1000000000
    return countries[key] <= 1000000000;
});
console.log(countries);
// Results in:
// ["UnitedStates", "Indonesia", "Brazil", "Pakistan"]

var countries = {
    China: 1371980000,
    India: 1276860000,
    'United States': 321786000,
    Indonesia: 255461700,
    Brazil: 204873000,
    Pakistan: 190860000
};
var countriesFiltered = Object.keys(countries).filter(function (key) {

    return countries[key];


}).map(function (key) {
    return countries[key];
});
//console.log(countriesFiltered);
//console.log(countries);

// Returns:
// [321786000, 255461700, 204873000, 190860000]





var fruits = {
    "red": "apple",
    "blue": "blueberry",
    "yellow": "banana"
}

var appleless_keys = Object.keys(fruits).filter(this_fruit => fruits[this_fruit] !== "apple");
appleless_obj = {};
appleless_keys.forEach(key => appleless_obj[key] = fruits[key]);
console.dir(appleless_obj);

var fruits = {
    "red": "apple",
    "blue": "blueberry",
    "yellow": "banana"
}

function remove_fruit(fruit_to_remove, fruits) {
    var new_keys = Object.keys(fruits).filter(this_fruit => fruits[this_fruit] !== fruit_to_remove);
    new_obj = {};
    new_keys.forEach(key => new_obj[key] = fruits[key]);
    return new_obj;
}

console.dir(remove_fruit("apple", fruits));

var fruits = {
    "red": "apple",
    "blue": "blueberry",
    "yellow": "banana"
}
delete fruits.red; // or use => delete fruits['red'];
const fruits1=fruits.splice;
console.log(fruits1);


