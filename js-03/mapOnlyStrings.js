const mapOnlyStrings = (array, fn) => {
    return array
        .map(item => [item, fn(item)])
        .map(([original, mapped]) => typeof mapped === "string" ? mapped : original);
};
module.exports = {mapOnlyStrings};