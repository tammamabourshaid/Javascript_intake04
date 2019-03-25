function calculateBasket (basket) {
    let total = 0;
    for(const key in basket){
        if(basket.hasOwnProperty(key)){
            total=total+ basket[key].amount*basket[key].price;
        }
    }return total;   
 

}
module.exports = {calculateBasket};