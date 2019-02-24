// function calculateBasket(basket) {
//     let totalAmount = 0;
//     basket.forEach(product => { totalAmount += product.amount * product.price });
//     return totalAmount;
// }





function calculateBasket(basket) {
    let totalAmount = 0;
    for (const product in basket) {
        totalAmount += basket[product]["amount"] * basket[product]["price"];
    }
    return totalAmount;

}
module.exports = { calculateBasket };