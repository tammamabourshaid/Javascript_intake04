function flatten(array) {
    return array.reduce(function(flat, toflatten) {
        return flat.concat(Array.isArray(toflatten) ? flatten(toflatten) : toflatten);
    }, []);
}


module.exports = { flatten };