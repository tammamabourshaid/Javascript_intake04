function getMinMaxNumber(array) {

    const sortedArray = [];
    const smallest = Math.min(...array);
    const biggest = Math.max(...array);

    sortedArray.push(smallest);
    sortedArray.push(biggest);

    return sortedArray;
}

module.exports = { getMinMaxNumber };

/*let smallest = numbers[0];
    let biggest = numbers[0];
    const minMaxArray = [];

    numbers.forEach(element => {
        if(element < smallest){
            smallest = element;
        }
        if(element > biggest){
            biggest = element;
        }
    });

    minMaxArray.push(smallest);
    minMaxArray.push(biggest);
    return minMaxArray;
    */