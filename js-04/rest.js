function rest(eini) {
    let aussi = []
    if (eini.length == 1) {
        return aussi
    } else {
        for (let i = 1; i < eini.length; i++) {
            aussi.push(eini[i]);
        }
        return aussi;
    }
}

module.exports = {rest}