function pipe(functionArray){

    let result = 0;

    functionArray.forEach(element => { 
        result = element(result);
    });

    return result;
}

module.exports = {pipe};