function swap(eini, eins, zwei) {
    const temp = eini[eins];
    eini[eins] = eini[zwei];
    eini[zwei] = temp;
}

function permutate(list) {

    var aussi = [];

    mutate(list, list.length);

    function mutate(list, n) {
        var i;

        if (n == 1) {
            aussi.push(list.slice());
        } else {
            for (i = 0; i < n - 1; i++) {
                mutate(list, n - 1);
                if (n % 2) {
                    swap(list, 0, n - 1);
                } else {
                    swap(list, i, n - 1);
                }
            }
            mutate(list, n - 1);
        }
    }
    return aussi.sort();
}

module.exports = { permutate };

console.log(permutate([1, 2, 3]));

