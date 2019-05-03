export const getAverage = (numbers: Array<number>) => {
  const size = numbers.length,
    reducer = (accumulator: number, currentValue: number) => (accumulator + currentValue),
    sum = numbers.reduce(reducer),
    average = sum / size;

  return average;
};