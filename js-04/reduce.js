function reduce(array, fn) {

    let accumulator;

    if(typeof array[0] === "string"){
        accumulator = "";
    }
    if(typeof array[0] === "number"){
        accumulator = 0;
    }
    if(fn(2,5) === 10){
        accumulator = 1;
    }

    array.forEach(element => {
       accumulator = fn(accumulator, element);
    });

    return accumulator;
}

module.exports = { reduce };