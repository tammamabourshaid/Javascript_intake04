function swap(eini, eins, zwei) {
    const temp = eini[eins];
    eini[eins] = eini[zwei];
    eini[zwei] = temp;
}

function permutate(eini) {

    var aussi = [];

    mutate(eini, eini.length);

    function mutate(eini, n) {
        var i;

        if (n == 1) {
            aussi.push(eini.slice());
        } else {
            for (i = 0; i < n - 1; i++) {
                mutate(eini, n - 1);
                if (n % 2) {
                    swap(eini, 0, n - 1);
                } else {
                    swap(eini, i, n - 1);
                }
            }
            mutate(eini, n - 1);
        }
    }
    return aussi.sort();
}

module.exports = { permutate };
