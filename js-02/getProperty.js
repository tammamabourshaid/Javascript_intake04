const getProperty = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : null, nestedObj);
}
module.exports={getProperty};