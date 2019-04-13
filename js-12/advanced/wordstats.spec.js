const { wordStats } = require("./wordstats");
        
describe(`
wordStats is an object that provides handy functions for 
getting text-based statistics. You will have to use
regular expressions for this exercise.`, () => {
  it("should count words on an easy text", () => {
    const text = "this is a test.\ni hope that it works. :)";
    expect(wordStats.countWords(text)).toBe(9);
  });
  it("should lookup the occurrences for a particular word", () => {
    const text = "I write this text, where I don't use lower cases for I";
    expect(wordStats.occurrences("i", text)).toBe(3);
  });
  it("should return a list with all words sorted after their occurrence", () => {
    const text = "Rose is a rose is a rose is a rose";
    expect(wordStats.occurrencesList(text)).toEqual([
      { term: "rose", count: 4 },
      { term: "a", count: 3 },
      { term: "is", count: 3 }
    ]);
  });
});
