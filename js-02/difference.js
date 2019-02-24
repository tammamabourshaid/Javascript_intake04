function getDifference(array1, array2){

    let uniqueNumbers = [];
    
    array1.forEach(element => {

        if(array2.indexOf(element) === -1){
            uniqueNumbers.push(element);
        }
        
    });

    array2.forEach(element => {

        if(array1.indexOf(element) === -1 && uniqueNumbers.indexOf(element) === -1){
            uniqueNumbers.push(element);
        }
        
    });
    return uniqueNumbers;  
}

module.exports = {getDifference};