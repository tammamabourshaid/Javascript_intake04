//function flatten(multiDimensionalArray) {

// const multiDimensionalArray = [];  
// const flattenedArray = [].concat(...multiDimensionalArray);  
// const flattenedArray = $.merge(...multiDimensionalArray);  
// console.log(flattenedArray) // [1, 2, 3, 4, 5, 6]  

// return flattenedArray;
// }

// const flatten = list => list.reduce(
//     (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
// );

// const flatAnimals = animals.flat(Infinity);

// console.log(flatAnimals);

// ES5
const flatten = function flatten(list) {
    const f = list.reduce(function (a, b) {
        return a.concat(Array.isArray(b) ? flatten(b) : b);
    }, []);
    
    return f
};

module.exports = {
    flatten
};