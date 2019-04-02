function getProperty(object, key) {
    const firstLetterUpperCased = key.charAt(0).toUpperCase() + key.slice(1);
    console.log(firstLetterUpperCased);

    const value = Object.values(object)
    return key === firstLetterUpperCased ? value[0] : value[1]

}

module.exports = {
    getProperty
}