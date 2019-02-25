function getMinMaxNumber(input){
    let sorted = input.sort((a, b) => a - b);
return [sorted[0], sorted[sorted.length -1]]    
}

module.exports = {getMinMaxNumber};