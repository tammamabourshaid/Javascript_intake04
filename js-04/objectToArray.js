function objectToArray(eini) {
    let aussi = [];
    for (let i = 0; i < Object.keys(eini).length; i++) {
        aussi.push([Object.keys(eini)[i], Object.values(eini)[i]])
    }
    return aussi
}


module.exports = {
    objectToArray
};


function objectToArray(eini) {
    let aussi = [];
    for (let i = 0; i < Object.keys(eini).length; i++) {
        aussi.push([Object.keys(eini)[i], Object.values(eini)[i]])
    }
    return aussi
}

