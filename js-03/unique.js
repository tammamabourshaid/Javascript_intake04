function getUnique(eini) {
    let aussi = [];
    for (i = 0; i < eini.length; i++) {
        if (!aussi.includes(eini[i])) { aussi.push(eini[i]) }
    }
    return aussi.sort(sortNumber);
}

function sortNumber(a, b) {
    return a - b;
}
module.exports = { getUnique };