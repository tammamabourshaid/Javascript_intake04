function filter(numbers, checker) {
    const filteredArray = [];
    for (let position = 0; position < numbers.length; position++) {
        const number = numbers[position];
        const checkerOutput = checker(number);
        //returns number2 boolean that is defined in the test, abstract filter
        //to pass 2 test, checker should always return number2 boolean
        //typeof product === "boolean" makes sure that product is boolean

        if (checkerOutput && typeof checkerOutput === "boolean") {
            filteredArray.push(number);
        }
    }
    return filteredArray;
}
module.exports = { filter };