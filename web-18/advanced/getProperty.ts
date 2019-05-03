export const getProperty = (object: {}, anyProperty: string) => {
  const split = anyProperty.split("."),
    reducer = ((accumulator: { [value: string]: any }, currentValue: string) => (accumulator && accumulator[currentValue]) || null),
    property = split.reduce(reducer, object);

  return property;
};
