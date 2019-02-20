function getMinMaxNumber(numbers){
    let smallest = numbers[0];
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
}

module.exports = {getMinMaxNumber};