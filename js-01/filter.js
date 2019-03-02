const filter = (array, filterFn) => {
    const filteredArray = [];
    
    for (let position = 0; position < array.length; position++) {
        const number = array[position],
            filterOutput = filterFn(number);
        if (filterOutput && typeof filterOutput === "boolean") {
            filteredArray.push(number);
        }
    }

    return filteredArray;
};

module.exports = { filter };