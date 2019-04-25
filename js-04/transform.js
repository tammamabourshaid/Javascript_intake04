function transform(array, fn) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let result = fn(element);
        newArray.push(result);
    }  
    return newArray;
}



module.exports ={transform};