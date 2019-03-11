const b = 2 + 3;
console.log(b);
//--------------------
var elements = ['Fire', 'Wind', 'Rain'];
console.log(elements.join());
// expected output: "Fire,Wind,Rain"
console.log(elements.join(''));
// expected output: "FireWindRain"
console.log(elements.join('-'));
// expected output: "Fire-Wind-Rain"
//------------------------------------
var a = ['Wind', 'Rain', 'Fire'];
a.join();      // 'Wind,Rain,Fire'
a.join(', ');  // 'Wind, Rain, Fire'
a.join(' + '); // 'Wind + Rain + Fire'
a.join('');    // 'WindRainFire'
console.log(a);
//-----------------------------------
var str = "This string is kind of spacey.";
str = str.replace(" ", "_");
console.log(str); //"This_string is kind of spacey."
var i = 0, strLength = str.length;

for (i; i < strLength; i++) {

  str = str.replace(" ", "_");
}
console.log(str); //"This_string_is_kind_of_spacey."
//-----------------------------------------------------
// function f(a, b, c) {
//   var s = Array.prototype.join.call(arguments);
//   console.log(s); // '1,a,true'
// }
// f(1, 'a', true);
//expected output: "1,a,true"
//----------------------------------------
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ';
var comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
//------------------------------
var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

var re = /\s*(?:;|$)\s*/;
var nameList = names.split(re);

console.log(nameList);
//---------------------------
var myString = 'Hello World. How are you doing?';
const splits = myString.split(' ', 5);

console.log(splits);
//-------------------------
var myString2 = 'Hello 1 word. Sentence number 2.';
var splits2 = myString2.split(/(\d)/);

console.log(splits2);
//-----------------------------
var myString3 = 'this|is|a|Test';
var splits3 = myString3.split(['|']);

console.log(splits3); //["this", "is", "a", "Test"]
//-----------------------------
var myString4 = 'ca,bc,a,bca,bca,bc';

var splits4 = myString4.split(['a', 'b']);
// myString.split(['a','b']) ist dasselbe wie myString.split(String(['a','b']))

console.log(splits4);  //["c", "c,", "c", "c", "c"]
//----------------------------
var str2 = 'asdfghjkl';
var strReverse = str2.split('').reverse(); // 'lkjhgfdsa'
console.log(strReverse);
console.log(strReverse.join(''));


// split() returns an array on which reverse() and join() can be applied
//------------------------
const csv = `
Irene,Kummer,female,\n
Sebastian,Traxler,male,\n
Johann,Leopold,male,\n
Sigrid,Mauerbach,female,\n  
Agnes,Tragschitz,female
    `;
const textReading = object => {
  const person = {
    firstname: object[0],
    lastname: object[1],
    gender: object[2]
  };
console.log(person);

  return person;
}

   const Ccc=csv.split ('\n')
   .map(element => element.split(" "))
        .filter(element => !element.includes(""))
        .map(element => [element].toString().split(","))
        .map(element => textReading(element));
console.log(Ccc);

// class PersonParser {
//   constructor() { }

//   parse(csv) {
//     const split = csv.split("\n"),
//       parse = split
//         .map(element => element.split(" "))
//         .filter(element => !element.includes(""))
//         .map(element => [element].toString().split(","))
//         .map(element => transformIntoPerson(element));
// console.log(parse);

//     return parse;
//   }

// }




// const Ccc = csv.split(',')
// console.log(Ccc);

// Ccc1 = csv.split('\n');
// console.log(Ccc1);



// const arr = [];

// console.log(Ccc[0]);
// arr.push(Ccc[0])
// console.log(Ccc[3]);
// arr.push(Ccc[3])
// console.log(Ccc[6]);
// arr.push(Ccc[6])
// console.log(Ccc[9]);
// arr.push(Ccc[9])
// console.log(Ccc[12]);
// arr.push(Ccc[12])
// console.log(arr);
// console.log(arr.length);



//console.log(arr.entries);
// const arrToCSV=(arr.delimiter=',')=>
// arr.map(v=>v.map(x=>'"${x}"').join(delimiter)).join('\n');

// const ConvertCSVToArr=(csv,delimiter=',',omitFirstRow=false)=>
// csv
// .slice(omitFirstRow?csv.indexOf('\n')+1:0)
// .split('\n')
// .map(v=>v.split(delimiter));
// console.log(ConvertCSVToArr);
//------------------------------
//  const csv1 = (csv, delimiter = ',') => {
//   const titles = csv.slice(0, csv, indexOf('\n')).split(delimiter);
//   return csv
//     .slice(csv.indexOf("\n") + 1)
//     .split('\n')
//     .map(v => {
//       const values = v.split(delimiter);
//       console.log(titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {}));

//      const tt=titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
// console.log(titles);

//      return tt;

//     });
// };

// console.log(csv.length);



// function download_csv() {

//   data.forEach(function (row) {
//     csv += row.join(',');
//     csv += "\n";
//   });

//   console.log(csv);
//   var hiddenElement = document.createElement('a');
//   hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
//   hiddenElement.target = '_blank';
//   hiddenElement.download = 'people.csv';
//   hiddenElement.click();
// }





// class PersonParser {
//   constructor() { }

//   parse(csv) {
//     const split = csv.split("\n"),
//       parse = split
//         .map(element => element.split(" "))
//         .filter(element => !element.includes(""))
//         .map(element => [element].toString().split(","))
//         .map(element => transformIntoPerson(element));
// console.log(parse);

//     return parse;
//   }

// }

// const transformIntoPerson = object => {
//   const person = {
//     firstname: object[0],
//     lastname: object[1],
//     gender: object[2]
//   };
// console.log(person);

//   return person;
// }

function PersonParser(object) {
  parse(csv)
  const Ccc = csv.split('\n')
  parse = Ccc

    .map(element => element.split(" "))
    .filter(element => !element.includes(""))
    .map(element => [element].toString().split(","))
    .map(element => PersonParser(element));
  const person = {
    firstname: object[0],
    lastname: object[1],
    gender: object[2]
  };

  console.log(person);

  return person;
}

console.log(Ccc)