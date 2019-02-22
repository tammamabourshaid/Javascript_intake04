const flatten = array => {
    // const concatenatedArray = concat(...array);
    // const reducer = (accumulator, value) => {accumulator.concat(value)};
    // concatenatedArray.reduce(reducer);
    // console.log(concatenatedArray);
    // return concatenatedArray;
    // const flattenedArray =  [].concat.apply([], array);
    // console.log(flattenedArray);
    // return flattenedArray;
    array.forEach(element => {
        return element.concat();
    });
};

module.exports = { flatten };