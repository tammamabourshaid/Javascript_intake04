function filter(numbers, checker) {
    const filteredArray = [];
    for (let position = 0; position < numbers.length; position++) {
        const number = numbers[position];
        const checkerOutput = checker(number);
        
        if (checkerOutput &&  checkerOutput === true) {
            filteredArray.push(number);
        }
    }
    return filteredArray;
}
module.exports = { filter };


// checker has no logic here, it is just a function and we change the logic in Test
