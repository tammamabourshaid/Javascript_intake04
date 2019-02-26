function filter(array, checkerFn) {

    const filteredArray = [];

    for (let position = 0; position < array.length; position++) {
        const number = array[position];
        const checkerFnOutput = checkerFn(number);

        if (checkerFnOutput && checkerFnOutput === true) { //=== must return boolean 
            filteredArray.push(number);                    // to pass second test
        }
    }
    return filteredArray;
}

module.exports = { filter };