function calculateBasket(basket) {
    let total = 0;
    for (let thing in basket) {
        total += basket[thing]["amount"] * basket[thing]["price"]
    }
    return total;
}

module.exports = { calculateBasket };