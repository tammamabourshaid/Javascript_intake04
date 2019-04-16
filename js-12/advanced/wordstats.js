const wordStats = {
  countWords(text) {
    const res = new RegExp(/(\w)+( )*/, "g")
    return text.match(res).length;
  },

  occurrences(str, text) {

    let reg = new RegExp(str.toUpperCase(), "g");
    let count = text.match(reg).length;
    return count;
  }
}


module.exports = { wordStats };