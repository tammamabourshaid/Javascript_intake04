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
  const reducer = (accumulator, currentValue) => {
    return accumulator + (currentValue.amount * currentValue.price);
  };
  const total = list.reduce(reducer, 0);

  return total;
};

module.exports = { calculateBasket };
