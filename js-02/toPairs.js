const toPairs = (obj) => {
    let pair = [];
    for (const prop in obj) {
        pair.push([prop, obj[prop]]);
    }
    return pair.sort((a, b) => b[1] - a[1]);
};

module.exports = {toPairs}