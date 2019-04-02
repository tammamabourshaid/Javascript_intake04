// const marj = {
//     name: "Marj",
//     age: 31,
//     job: "programmer",
//     presentation: function(style, timeOfday){
//         if(style === "formal"){
//             console.log("Good " + timeOfday + " ladies and gentelmen! I\'m " + this.name + 
//             ", i\'m a " + this.job + " and i\'m " + this.age + " years old." );

//         }else if(style === "friendly"){
//             console.log("Hey! What's up? I\'m " + this.name + 
//             ", i\'m a " + this.job + " and i\'m " + this.age + " years old. Have a nice " + timeOfday + "." );
//         }
//     }
// }
// const rainer = {
//     name: "Rainer",
//     age: 37,
//     job: "programmer",
// }
// marj.presentation("formal", "evening");
// marj.presentation.call(rainer, "friendly", "day");

// const rainerFriendly = marj.presentation.bind(rainer, "friendly");
// rainerFriendly("night");

// const marjFormal = marj.presentation.bind(marj, "friendly");
// marjFormal("afternoon");


///////////////////////////////////////////////////////////////////
// let years = [1956, 1985, 1988, 1959, 1958, 2002];

// function arrayCalc(array, fn) {
//     let arrRes = [];
//     for (let i = 0; i < array.length; i++) {
//         arrRes.push(fn(array[i]));
//     }
//     return arrRes;
// }
// function calcAge(el) {
//     return 2019 - el;
// }
// function fullAge (el){
//     return el >= 18;
// }

// let ages = arrayCalc(years, calcAge);
// console.log(ages);
// let marj2 = arrayCalc(ages, fullAge);
// console.log(marj2);
/////////////////////////////////////////////////////////////////////////

const obj = {k: "1", s:"2", t:"3", j:"4"};
const m = Object.keys(obj)
console.log(m);

console.log(Object.values(obj));