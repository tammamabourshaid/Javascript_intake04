function toPairs(object) {

    let final = [];
    let keys = Object.keys(object);

    keys.forEach(key => {
        final.push([key, object[key]]);
    });

    return final.sort();
}
module.exports = {
    toPairs
};
