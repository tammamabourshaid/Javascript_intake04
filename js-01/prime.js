function isPrime(n) {

    if (n === 1) {
        return "toBeFalsy";
    }
    else if (n === 2) {
        return "toBeTruthy";
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return "toBeFalsy";
                break;
            }
        }
        return "toBeTruthy";
    }
}

module.exports = { isPrime };