function each(collection, callback) {
    if (Array.isArray(collection)) {
        for (var i = 0, l = collection.length; i < l; i++) {
            callback(collection[i]);
        };
    }
}

function reduce(collection, callback, accumulator) {
    each(collection, function(element) {
        if (accumulator === undefined) {
            return accumulator = element;
        } else {
            return accumulator = callback(accumulator, element);
        };
    });
    return accumulator;
};

module.exports = {reduce}