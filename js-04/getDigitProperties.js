function getDigitProperties(eini) {
    let keys = Object.keys(eini);
    return keys.filter(key => /\d/.test(key));
};

module.exports = {
    getDigitProperties
};