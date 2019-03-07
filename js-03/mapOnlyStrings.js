function mapOnlyStrings(array, condition) {
  const array1 = [];
  array.map(e => typeof e === true || typeof e === 1 ? array1.push(condition(e)) : array1.push(e));
  console.log(array1.map(condition));
  console.log(array1);

  return array1.map(condition) || array1;
}

module.exports = { mapOnlyStrings };



// const mapOnlyStrings = (array, condition) => {
//   //array = (['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog']);
//   const test = [];
//   array.map(e => typeof e === "string" || e === false || condition(e).toString().startsWith("0") ? test.push(condition(e)) : test.push(e));
//   //Secret Message........
//   //const secretMessage = array.map((animal) => animal[0]);//.join('')
//   //mapOnlyStrings(symbols, symbol => symbol + 5)
//   //console.log(test);
//   return test;
// };
//module.exports = { mapOnlyStrings };




// function mapOnlyStrings(array, condition) {
//     const transformed = array
//         .filter(element => typeof element !== "number" && typeof element !== "boolean")
//         .map(element => condition(element))

//     console.log(transformed);
//     return transformed;

// }




// function mapOnlyStrings(array, condition) {
// const filterd = [];

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (typeof element === "string" || element === false) {
//             filterd.push([element].map(condition).toString())
//         } else {
//             filterd.push(element);
//         }
//     }
//     console.log(filterd);

//     return filterd;
// }




// function mapOnlyStrings(array,condition) {
//     //array = (['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog']);

//     //Secret Message........
//     const secretMessage = array.map((animal) => animal[0]);//.join('')

//     //mapOnlyStrings(symbols, symbol => symbol + 5)

//     console.log(secretMessage);
//     return array.map(condition);

// }

// const mapOnlyStrings = (array, condition) => {
//     const transformed = [];
//     array.map(e => typeof e === "string" || e === false || condition(e).toString().startsWith("0") ? transformed.push(condition(e)) : transformed.push(e));

//     return transformed;
//   };
//   module.exports = { mapOnlyStrings };

