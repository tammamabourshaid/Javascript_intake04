const _ = require("lodash");


words = ["sky", "wood", "forest", "falcon", "pear", "ocean", "universe"];

let firstElement = _.first(words);
let lastElement = _.last(words);

// console.log(`first element is : ${firstElement}`);
// console.log(`Last element is : ${lastElement}`);



numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let pairs2 = _.chunk(numbers,2);
// console.log(pairs2);

// let pairs3= _.chunk(numbers,3);
// console.log(pairs3);


//chunk has two argument, the array and how many elements i want to chunk it to!


// let randomWord =_.sample(words);
// console.log(randomWord);

//using thie sample method, we can get a random element from the array!


let shuffeldWrods1 = _.shuffle(words);
let shuffeldWrods2 = _.shuffle(words);
let shuffeldWrods3 = _.shuffle(words);

// console.log(shuffeldWrods1);
// console.log(shuffeldWrods2);
// console.log(shuffeldWrods3);

//we can shuffle words


// _.times(4,()=>{
//     console.log(" awesome");
// });

//using times, we can repeat something by providing how many times we want!


// function message() {
//     console.log("something");
// }

// _.delay(message, 150);
// console.log("something else");


//delay delays the message 150 milliseconds




// const values = [1, 2, "good", [1, 2], {
//     name: "someone",
//     age: 32
// }];

// values.forEach((element) => {
//     if (_.isNumber(element)) {
//         console.log(JSON.stringify(element) + " is a string");
//     }
//     if (_.isArray(element)) {
//         console.log(JSON.stringify(element) + " is an array");
//     }
//     if (_.isObject(element)) {
//         console.log(JSON.stringify(element) + " is an object");
//     }
// });




const value1 = _.range(10);
console.log(value1);

const value2 = _.range(0,15);
console.log(value2);

const value3 = _.range(0,15,5);
console.log(value3);

//The Lodash _.range() function creates an array of numbers. 
//The function accepts the start, end, and step parameters.->> 



//we can use minBy
//maxBy
//sum
//




