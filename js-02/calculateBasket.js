function calculateBasket(list) {

    const value = Object.values(list);
    // const amount=Object.keys(list);

    const formula = (accumulator, currentValue) =>
        (accumulator + ((currentValue.price * currentValue.amount)));

    const total = value.reduce(formula, 0);
    console.log(total);

    return total;


}


module.exports = { calculateBasket };