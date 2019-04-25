const wordStats = {

    countWords(text) {
        const res = new RegExp(/(\w)+( )*/, "g")
        return text.match(res).length;
    },

    occurrences(str, text) {

        let reg = new RegExp(str.toUpperCase(), "g");
        let count = text.match(reg).length;
        return count;
    },

    occurrencesList(text) {
        let result = [];
        const array = text.split(" ");

        for (let i = 0; i < 3; i++) {
            const term = new RegExp(array[i].toLowerCase(), "g");
            const termObj = { "term": array[i].toLowerCase(), "count": text.toLowerCase().match(term).length };
            result.push(termObj);
        }
        console.log(result);

        return result;
    }
}

module.exports = { wordStats };