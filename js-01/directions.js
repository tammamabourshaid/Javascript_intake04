const shortenDirections = direction => {
    let n = "NORTH";
    let s = "SOUTH";

    let w = "WEST";
    let e = "EAST";

    if (n && s) {
        return 0;
    }
    if (w && e) {
        return 0;
    }
    if (n && w) {
        return 1;
    }

    console.log(direction)
};

module.exports = { shortenDirections };