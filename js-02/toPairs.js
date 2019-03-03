function toPairs(object) {

    let output = [];
    let keys = Object.keys(object);

    keys.forEach(key => {
        output.push([key, object[key]]);
    });

    return output;
}

module.exports = { toPairs };