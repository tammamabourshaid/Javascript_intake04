getMedian = (eini) => {
    sortNumber = (a, b) => {
        return a - b;
    }
    eini.sort(sortNumber);
    if (eini.length % 2 == 1) {
        return eini[(eini.length - 1) / 2]
    } else {
        return ((eini[(eini.length / 2) - 1] + eini[eini.length / 2]) / 2)
    }
}


module.exports = {
    getMedian
};