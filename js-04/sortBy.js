function sortBy(daten, methode) {
    const m = methode;
    return daten.sort(function(a, b) {
        return m(a) > m(b)
    })
}


module.exports = {sortBy}