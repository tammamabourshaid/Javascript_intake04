export const calculate = (number1: number, operation: string, number2: number) => {
  if (operation === '*') {
    return number1 * number2;
  } else if (operation === '/') {
    return number1 / number2;
  } else if (operation === '+') {
    return number1 + number2;
  } else if (operation === '-') {
    return number1 - number2;
  }
};