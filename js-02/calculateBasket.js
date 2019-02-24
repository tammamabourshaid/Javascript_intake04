function calculateBasket(basket){

    if(typeof basket === "array"){
        let total = 0;
    basket.forEach(object => { total = calculateOne(object) + total;
    });
        
        return total;        
    }

    
    let total = 0;
        for (const key in basket) {
            if (basket.hasOwnProperty(key)) {
                total = calculateOne(basket[key]) + total;
                
            }
        }
    return total;


function calculateOne(object){
    return object.amount * object.price; 
    }
}

module.exports = {calculateBasket};