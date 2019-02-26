function calculateBasket(basket) {

    if (typeof basket === "array") {
        basket = [...basket];
        const total = basket.map(element => element.amount * element.price).reduce(sumFn);
        return total;
    }
    let total = 0;
    for (const key in basket) {
        if (basket.hasOwnProperty(key)) {
            total = total + basket[key].amount * basket[key].price;

        }
    }
    return total;
}

function sumFn(number1, number2) {
    return number1 + number2;
}

module.exports = { calculateBasket };