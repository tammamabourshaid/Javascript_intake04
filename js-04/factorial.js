function factorial(eini) {
    if ((eini === 0)||(eini === 1)) {
        return 1;
    } else {
        let zahlen = [];
        for (let i = eini; i > 0; i--) {
            zahlen.push(i);
        } const aussi = zahlen.reduce((total, currentValue) => {
            return total * currentValue
        })
        return aussi;
    }
}





module.exports = { factorial };
