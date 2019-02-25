function filter(input){
    let largerThanTen = input > 10;
    rturn largerThanTen
  }
  

describe("filter", () => {
  it("should filter an array for number larger than 10", () => {
    const array = [1, 15, 20, 10, 12, 13];
    const filterFn = number => number > 10;
    const filteredArray = [15, 20, 12, 13];
    expect(filter(array, filterFn)).toEqual(filteredArray);
  });

  it("should expect the filter function to return only booleans", () => {
    const array = [1, 15, 20, 10, 12, 13];
    const filterFn = number => (number > 10 ? 1 : 0);
    const filteredArray = [];
    expect(filter(array, filterFn)).toEqual(filteredArray);
  });
});
