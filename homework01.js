/*
1. CombinedAdder
- Write a callback, promise and async/await version that returns 1.
- Get number1 with the callback, get number2 with the promise, get number3 with the async/await,
- add all three numbers and
- print out the sum.
*/

function returnRadnom() {
    return Math.random();
}

function returnOneWithCallback(eini) {
    return eini()
}

let erstesVersprechen = returnOneWithCallback(returnRadnom);

let versprechen = new Promise((resolve, reject) => {
    if (1 > 0) {
        resolve(Math.random());
    } else {
        reject(0);
    }
});

let returnTwoWithPromise = versprechen.then((r) => {
    return r;
});

async function returnThreeWithAsync() {
    var result = await versprechen;
    return result;
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let y = [1, 2, 3, 4, 5, 6];
let yy = y.reduce(reducer);

let ergebnis = Promise.all([erstesVersprechen, returnTwoWithPromise, returnThreeWithAsync()]).then((elements) => {
    console.log('Hier werden die Elemente einyeln aufgezaehlt, wobei ich eine Zufallsyahl anstelle der vorgesehenen Einser verwendet habe. Ich bin irrtuemlich davon ausgegangen, dass es dadurch klarer wuerde. ' + elements);
    console.log('Hier sehen wir die Summe aller drei Zufallszahlen. ' + elements.reduce(reducer));
});