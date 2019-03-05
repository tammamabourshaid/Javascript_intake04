function groupBy(array, fn) {

    let object = {};

    array.forEach(element => {
        const groupProperty = fn(element);
        if (object[groupProperty] == undefined) {
            object[groupProperty] = [];
            object[groupProperty].push(element);
        }
        else{
            object[groupProperty].push(element);
        }
        

    });

    return object;
}

module.exports = { groupBy };