function filter(numbers, checker){
    const filteredArray = [];
    for (let position = 0; position < numbers.length; position++) {
        const number = numbers[position];
        const checkerOutput = checker(number);
        //returns a boolean that is defined in the test, abstract filter
        //to pass 2 test, checker should always return a boolean
        //typeof name === "boolean" makes sure that name is boolean

        if(checkerOutput && typeof checkerOutput === "boolean"){
            filteredArray.push(number);
        }
    }
    return filteredArray;
}
 
module.exports = {filter};