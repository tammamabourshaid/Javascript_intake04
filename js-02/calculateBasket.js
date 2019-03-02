const calculateBasket = list => {
  const value = getValue(list),
    total = calculateTotal(value);

  return total;
};

const getValue = list => {
  const value = Object.values(list);

  return value;
};

const calculateTotal = list => {
  const initialValue = 0,
    reducer = (accumulator, currentValue) =>
      (accumulator + (currentValue.amount * currentValue.price)),
    total = list.reduce(reducer, initialValue);

  return total;
};

module.exports = { calculateBasket };