const wordStats = {
    countWords: function(text) {
        const umbruch = (text.match(/\n/g) || []).length;
        const leerstellen = (text.match(/ {1,}\w/g) || []).length;
        return 1 + umbruch + leerstellen;
    },
    occurrences: function(character, text) {
        const woerterarray = text.toLowerCase().split(/[, ]+/);
        return woerterarray.filter(function(e) {
            return e == character.toLowerCase()
        }).length;
    },
    compT: function(a, b) {
        if (a.term < b.term)
            return -1;
        if (a.term > b.term)
            return 1;
        return 0;
    },
    compC: function(a, b) {
        if (a.count > b.count)
            return -1;
        if (a.count < b.count)
            return 1;
        return 0;
    },

    occurrencesList: function(text) {
        const textL = text.toLowerCase().split(/[, ]+/);
        const ergebnis = [];
        textL.forEach(function(e) {
            if (!ergebnis.includes(e)) {
                ergebnis.push(e);
            }
        })
        let thingsToReturn = [];
        for (let i = 0; i < ergebnis.length; i++) {
            thingsToReturn.push({
                term: ergebnis[i],
                count: 0
            });
        }
        for (let j = 0; j < ergebnis.length; j++) {
            for (let k = 0; k < textL.length; k++) {
                if (ergebnis[j] == textL[k]) {
                    thingsToReturn[j].count++;
                }
            }
        }
        return thingsToReturn.sort(this.compT).sort(this.compC);
    }
}

module.exports = {
    wordStats
};