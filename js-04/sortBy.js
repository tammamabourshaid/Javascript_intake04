const sortBy = (object, fn) => {
    const sorted = object.sort((value1, value2) => {
        if (fn(value1) > fn(value2)) { return 1; }
        else if (fn(value2) > fn(value1)) { return -1; }
        return 0;
    });

    return sorted;
};

module.exports = { sortBy };