function getMedian(numbers){
    let median;
    //precondition
    //if(numbers && numbers.length)

    //find median of an array even length(2,3,4,5)
    if(isLengthEven(numbers)){
        const firstNumber = numbers[numbers.length / 2 - 1];
        const secondNumber = numbers[numbers.length / 2];
        median = (firstNumber + secondNumber) / 2;
        return median;
    }
    //find median of an array odd numbers (5,4,1,2,3), (50,3,1,1,2)
    //else if(isLengthOdd(numbers)){
    else{
        const divident = numbers.length - 1;
        const medianPosition = divident / 2;
        median = numbers.sort()[medianPosition]; //gives an undefined
        return median;
    }
}

function isLengthEven(numbers){
    return numbers.length % 2 == 0;
}

function isLengthOdd(numbers){
    return numbers.length % 2 == 1;
}

module.exports = {getMedian};