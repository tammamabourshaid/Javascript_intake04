const add: (number1: number, number2: number) => number = function(
  number1,
  number2
) {
  return number1 + number2;
};

add(5, "5");
add(true, new Date());
