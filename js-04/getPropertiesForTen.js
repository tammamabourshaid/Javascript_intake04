function getPropertiesForTen(object) {
    let keys = Object.keys(object);
    let final = [];

    keys.forEach(key => {
        if (object[key].constructor === String) {
            return;
        } else if (parseInt(key) + parseInt(object[key]) == 10) {
            final.push(key);
        }
    });
    return final;
}
module.exports = {
    getPropertiesForTen
};