function getPropertiesForTen(eini) {
    let aussi = [];
    Object.entries(eini).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        if ((Number(key) + value) == 10) {
            aussi.push(key)
        }
    });
    return aussi;
}

module.exports = {
    getPropertiesForTen
};