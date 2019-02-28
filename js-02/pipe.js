function pipe([add,initial, multiply,[]]){

        const value = Object.values(add,initial,multiply,[]);
    
        const formula = (accumulator, currentValue) =>
            (accumulator + ((currentValue.add + currentValue)&&accumulator+(currentValue.initial+currentValue)&&accumulator+(currentValue.multiply+currentValue)));
    
        const result = value.reduce(formula, 0);
        console.log(result);
    
        return result;
    

        var numbers = [1,2,3,4,5,6,7,8,9,10];  
        numbers.forEach((n, index) => {  
           numbers[index] = n + 1;
        });
        // => [2,3,4,5,6,7,8,9,10,11]



}
module.exports={pipe};