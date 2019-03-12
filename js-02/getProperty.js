// function getProperty([objects]) {
//     var objectToInspect;
//     var result = [];
//
//     for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
//         result = result.concat(
//             Object.getOwnPropertyNames(objectToInspect)
//         );
//     }
//
//     return result;
// }
//
// module.exports = { getProperty };

function getProperty(object, selector) {
    const selectors = selector.split(".");
    return getPropertyRecursive(object, selectors);
}

function getPropertyRecursive(object, selectors) {
    const nestedObject = object[selectors[0]];
    if (nestedObject === null || nestedObject === undefined) {
        return null;
    } else if (selectors.length > 1) {
        return getPropertyRecursive(nestedObject, selectors.slice(1));
    } else {
        return nestedObject;
    }
}

module.exports = { getProperty };
