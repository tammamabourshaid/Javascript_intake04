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
  const total = list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount * currentValue.price;
  }, 0);
  return total;
};

module.exports = { calculateBasket };
