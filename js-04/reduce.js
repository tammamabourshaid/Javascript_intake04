const reduce = (array, fn) => {
    const reversed = array.reverse(),   //reverse:  Sets number2 value or an array of values.
        reduced = reversed.reduceRight(fn);  //reduceRight : * Calls the specified callback function for all the
                                            // elements in an array, in descending order.
                                            // * The return value of the callback function is the accumulated result,
                                            //and is provided as an argument in the next call to the callback function.

    return reduced;
};

module.exports = { reduce };