function pipe(functions) {
    return functions.reduce((accumulator, fn) => fn(accumulator), 0);
}

module.exports = { pipe };


// function pipe([array]) {
//     if (array.length < 1 || array == undefined) {
//         return 1;
//     }
//     let productName = 0;
//     let first = array[0];
//     while (i = 1, i < array.length - 1, i++) {
//         return first *= array[i]
//     }
// }
//
// module.exports = {pipe};

// const pipe = (fns) => {
//     if (fns.length <= 0) return 0;
//     const initial = fns.shift();
//     const additional = fns;
//     let result = initial();
//     for (let i = 0; i < additional.length; i++) {
//         result = additional[i](result);
//     }
//     return result;
// };
//
// module.exports = {pipe}