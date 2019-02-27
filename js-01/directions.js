function shortenDirections(directions) {
    let horizontal = 0;
    let vertical = 0;

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        switch (direction) {
            case "NORTH":
                vertical++;
                break;
            case "SOUTH":
                vertical--;
                break;
            case "WEST":
                horizontal--;
                break;
            case "EAST":
                horizontal++;
                break;
        }
    }

    const shortenedDirections = [];

    const putDirectionsTimes = function(direction, times) {
        for (let i = 0; i < times; i++) {
            shortenedDirections.push(direction);
        }
    };


    if (horizontal > 0) {
        putDirectionsTimes("EAST", horizontal)
    }

    if (horizontal < 0) {
        putDirectionsTimes("WEST", horizontal * -1)
    }

    if (vertical > 0) {
        putDirectionsTimes("NORTH", vertical)
    }
    if (vertical < 0) {
        putDirectionsTimes("SOUTH", vertical * -1)
    }
    return shortenedDirections;

}
module.exports = { shortenDirections };