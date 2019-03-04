function getDigitProperties(object) {

    let allProps = Object.keys(object);
    let propsWithDigits = [];
    let numberRegEx = /[0-9]/; //\d - shortcut 

    allProps.forEach(prop => {
        if (numberRegEx.test(prop)) {
            propsWithDigits.push(prop);
        }
    });

    return propsWithDigits;
}

module.exports = { getDigitProperties };