function getDifference(Array1,Array2){
    let difference=[]
    difference = Array1.filter(element => !Array2.includes(element));
}
module.exports={getDifference};

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
