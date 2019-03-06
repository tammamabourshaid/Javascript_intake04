

module.exports = { mapOnlyStrings };

// function mapOnlyStrings(array, condition) {

//     return array.map(condition);

// }


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


function mapOnlyStrings(array,condition) {
    //array = (['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog']);
const test=[];
    array.map(e=>e===""||e===false||e===condition.toString(startWith("0"))? test.push(condition(e)):test.push(e));
    //Secret Message........
    const secretMessage = array.map((animal) => animal[0]);//.join('')

    //mapOnlyStrings(symbols, symbol => symbol + 5)

    console.log(secretMessage);
    return array.map(condition);

}
