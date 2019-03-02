function pipe(functions) {

    if (typeof functions[0] != "function") {return 0}
  else {

        const firstFn = functions[0];
        let formerValue = firstFn();

        for (let i = 1; i < functions.length; i++) {
            const fn = functions[i];
            formerValue = fn(formerValue);
        } return formerValue;
    }
}
console.log(pipe([]));
module.exports = { pipe };

