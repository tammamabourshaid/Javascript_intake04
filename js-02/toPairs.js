function toPairs(city) {

    let final = [];
    let keys = Object.keys(city);

    keys.forEach(key => {
        final.push([key, city[key]]);
    });

    return final.sort();
}
module.exports = {
    toPairs
};