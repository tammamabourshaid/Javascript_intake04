const { getMedian } = require("./median.js");

describe("getMedian", () => {
  it("should get median from an unsorted, odd list", () =>
    expect(getMedian([5, 2, 4, 1, 3])).toBe(3));

  it("should get median of an odd list with outlier", () =>
    expect(getMedian([50, 3, 1, 1, 2])).toBe(2));

  it("should get median of an even list", () =>
    expect(getMedian([2, 3, 4, 5])).toBe(3.5));
});
