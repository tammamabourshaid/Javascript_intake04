const isPrime = number => {
    for (let times = 2; times < number; times++) {
        if (number % times === 0) { return false; }
    }
    return number > 1;
};

module.exports = { isPrime };
