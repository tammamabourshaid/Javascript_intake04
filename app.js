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

let x = [5, 2, 4, 1, 3];
let y = [50, 3, 1, 1, 2];
let z = [11, 1, 2, 3, 4];
let gerade = [2, 3, 4, 5];
console.log(x);
console.log(getMedian(x));
console.log(getMedian(y));
console.log(getMedian(z));
console.log(getMedian(gerade));