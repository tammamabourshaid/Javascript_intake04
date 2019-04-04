function getProperty(person, fl) {
    const result = person[fl];
    if (result === undefined) {
        return null;
    } else {
        return result;
    }
}



module.exports = { getProperty };