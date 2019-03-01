function flatten(array) {
    return reduce(array);

}

const reduce = function (array, concatenated = []) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (Array.isArray(element)) {
            reduce(element, concatenated);
        }
        else {
            concatenated.push(element);
        }
    }
    return concatenated;
};


//options for one level arrays

//reduce(function(arrayOne, arrayTwo){ return arrayOne.concat(arrayTwo);});
//[].concat.apply([],array);


module.exports = { flatten };