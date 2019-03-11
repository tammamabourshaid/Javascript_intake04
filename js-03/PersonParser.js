// function PersonParser(csv){
//     //const split=csv.split(',');
//     const ConvertCSVToArr=(csv,delimiter=',',omitFirstRow=false)=>
// csv
// .slice(omitFirstRow?csv.indexOf('\n')+1:0)
// .split('\n')
// .map(v=>v.split(delimiter));
// console.log(csv);

// console.log(Ccc);
// console.log(Ccc.length);
// const arr=[];

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
// console.indexOf(arr);
// console.log(arr.length);
// console.log(Ccc.toMatchObject);


// // const arrToCSV=(arr.delimiter=',')=>
// // arr.map(v=>v.map(x=>'"${x}"').join(delimiter)).join('\n');

// const ConvertCSVToArr=(csv,delimiter=',',omitFirstRow=false)=>
// csv
// .slice(omitFirstRow?csv.indexOf('\n')+1:0)
// .split('\n')
// .map(v=>v.split(delimiter));
// console.log(csv);

// //------------------------------
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
// console.log(csv.length);
//      //return tt;
//      return arr;
//     });
// };
// }





// class PersonParser {
//     constructor() { }

//     parse(csv) {
//       const split = csv.split("\n"),
//         parse = split
//           .map(element => element.split(" "))
//           .filter(element => !element.includes(""))
//           .map(element => [element].toString().split(","))
//           .map(element => transformIntoPerson(element));
//   console.log(parse);
//   parse.length;
//   console.log(parse.length);

//       return parse;
//     }

//   }

//   const transformIntoPerson = object => {
//     const person = {
//       firstname: object[0],
//       lastname: object[1],
//       gender: object[2]
//     };
//   console.log(person);

//     return person;
//   }
const csv = `
Irene,Kummer,female\n
Sebastian,Traxler,male\n
Johann,Leopold,male\n
Sigrid,Mauerbach,female\n
Agnes,Tragschitz,female
    `;

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
    
    console.log(parse)


module.exports = { PersonParser };