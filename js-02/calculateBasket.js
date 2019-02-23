const calculateBasket = list => {
    const converted = convertIntoArray(list),
        total = calculateTotal(converted);
    return total;
};

const convertIntoArray = list => {
    const converted = Object.values(list);
    return converted;
};

const calculateTotal = list => {
    const reducer = ((accumulator, currentValue) => {
        return accumulator + (currentValue.amount * currentValue.price);
    }, 0),
    total = list.reduce(reducer);
    return total;
};

module.exports = { calculateBasket };