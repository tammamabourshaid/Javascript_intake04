const sortBy = (object, function) => {
    const sorted = object.sort((value1, value2) => {
        if (function(value1) > function(value2)) { return 1; }
        else if (function(value2) > function(value1)) { return -1; }
        return 0;
    });

    return sorted;
};

module.exports = { sortBy };