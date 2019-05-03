export const getFrequencyTable = (array: Array<number>) => {
  const object = {};

  const reducer = ((accumulator: { [value: string]: number; }, currentValue: number) =>
    ((accumulator[currentValue]) = ++accumulator[currentValue] || 1, accumulator)),
    frequency = array.reduce(reducer, object);

  return frequency;
};