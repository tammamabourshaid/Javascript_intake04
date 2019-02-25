const calculateBasket = (basket) => {
  let total = 0;
  for (const item in basket) {
    if (basket.hasOwnProperty(item)) {
      total += basket[item]["amount"] * basket[item]["price"];
    }
  }
  return total;
}

module.exports = {
  calculateBasket
}