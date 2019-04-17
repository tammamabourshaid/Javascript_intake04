const { fetchComposerData } = require("./fetchComposerData");

/**
fetchComposerData is a function that gets a readlinefetchComposerData is a function that gets a readline
function as parameter. This readline function returns asynchronically
a string from a user's input.

The user is asked for the first and lastname of a composer. After
that, the function should make a call to http://imslp.org.
This is a website that primarily provides sheet music, but also basic
data for each composer.

Transform the composer's name into the right url, request that url
and get the birth- and deathdate of the composer. Based on these two
dates, calculate the age and return it asynchronously.

Example: The user inputs for firstname "Johann Sebastian" and for the
lastname "Bach". The right url would be https://imslp.org/wiki/Category:Bach,_Johann_Sebastian

The birth- end deathdate can be found on imslp in a div with red-like background.
It would be 21 March 1685 - 28 July 1750, which means Bach lived 65 years.

Use node's internal https library to request the url.
 */

describe("fetchComposerData", () => {
  const createReadlineFunction = names => async () => names.shift();

  it("should get the age of Johann Sebastian Bach with 65 years", async () => {
    expect(
      await fetchComposerData(
        createReadlineFunction(["Johann Sebastian", "Bach"])
      )
    ).toEqual(65);
  });

  it("should get the age of Arnold Schönberg with 76 years", async () => {
    expect(
      await fetchComposerData(createReadlineFunction(["Arnold", "Schoenberg"]))
    ).toBe(76);
  });

  it("should get the age of Franz Schubert with 31 years", async () => {
    expect(
      await fetchComposerData(createReadlineFunction(["Franz", "Schubert"]))
    ).toBe(31);
  });
});
