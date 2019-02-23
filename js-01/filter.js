function filter(numbers, checkerFn){
    const filteredArray = [];
    for (let position = 0; position < numbers.length; position++) {
        const number = numbers[position];
        const checkerOutput = checkerFn(number);

        //checkerFn is a function that returns a boolean
        //to pass the test, checkerFn should always return a boolean
        //typeof name === "boolean" makes sure that name is boolean

        if(checkerOutput && typeof checkerOutput === "boolean"){//if it is truthy and boolean
            filteredArray.push(number);
        }
    }
    return filteredArray;
}

 
module.exports = {filter};
