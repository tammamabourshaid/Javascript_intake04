function mapOnlyStrings(array, fn) {

    let mapped = [];

    array.forEach(element => {

        let output = fn(element);

        if (typeof output !== "string") {
            mapped.push(element);
        }
        else {
            mapped.push(output);
        }

    });

    return mapped;
}

module.exports = { mapOnlyStrings };