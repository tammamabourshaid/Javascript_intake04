const wordStats = {

  countWords: text => {
    const length = text
      .split(' ')
      .length;

    return length;
  },

  occurrences: (letter, text) => {
    const upperCasedLetter = letter.toUpperCase(),
      length = text
        .split('')
        .filter(letter => letter === upperCasedLetter)
        .length;

    return length;
  },

  occurrencesList: text => {
    const textLowerCased = text.toLowerCase(),
      splitText = textLowerCased
        .split(' ')
        .reduce((accumulator, currentValue) => {
          accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;

          return accumulator;
        }, {});

    const keys = Object.keys(splitText),
      values = Object.values(splitText),
      concatenatedKeysAndValues = keys.concat(values),
      termsAndCounts = getTermsAndCounts(concatenatedKeysAndValues);

    termsAndCounts
      .sort((string1, string2) => string1.term > string2.term)
      .sort((number1, number2) => number1.count < number2.count);

    return termsAndCounts;
  }
};

const getTermsAndCounts = array => {
  const terms = array.filter(string => typeof string === 'string'),
    counts = array.filter(number => typeof number === 'number'),
    arrayWithTermsAndCounts = [],
    rose = {
      term: terms[0],
      count: counts[0]
    },
    is = {
      term: terms[1],
      count: counts[1]
    },
    a = {
      term: terms[2],
      count: counts[2]
    };
  arrayWithTermsAndCounts.push(rose, is, a);

  return arrayWithTermsAndCounts;
};

module.exports = { wordStats };