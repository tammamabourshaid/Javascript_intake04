function datediff(first, second) {
    return Math.abs(
        (Date.UTC(first.getFullYear(), first.getMonth(), first.getDate()) -
            Date.UTC(second.getFullYear(), second.getMonth(), second.getDate())) / 86400000);
}



module.exports = {
    datediff
};