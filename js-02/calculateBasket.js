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
    const total = list.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.amount * currentValue.price);
    }, 0);
    return total;
};

module.exports = { calculateBasket };