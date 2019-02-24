
function getDifference(array1, array2) {
    let resultArray = [];

    array2.filter(function (number) {
        if (!array1.includes(number)) resultArray.push(number);
    });

    array1.filter(function (number) {
        if (!array2.includes(number)) resultArray.push(number);
    });


    return resultArray.sort();

}


module.exports = { getDifference };