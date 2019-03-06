function rest(array) {

    let result = [];

    for (let index = 1; index < array.length; index++) {
        result.push(array[index]);
    }
    
    return result;
}

module.exports = { rest };