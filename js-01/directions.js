const shortenDirections = directions => {
    let horizontal = 0,
        vertical = 0,
        size = directions.length;

    for (let times = 0; times < size; times++) {
        const direction = directions[times];
        switch (direction) {
            case "EAST":
                horizontal++;
                break;
            case "WEST":
                horizontal--;
                break;
            case "NORTH":
                vertical++;
                break;
            case "SOUTH":
                vertical--;
                break;
        }
    }

    const correctDirections = [];
    const putCorrectDirections = (direction, times) => {
        for (let position = 0; position < times; position++) {
            correctDirections.push(direction);
        };
    };

    if (horizontal > 0) {
        putCorrectDirections("EAST", horizontal);
    }
    if (horizontal < 0) {
        putCorrectDirections("WEST", horizontal * -1);
    }
    if (vertical > 0) {
        putCorrectDirections("NORTH", vertical);
    }
    if (vertical < 0) {
        putCorrectDirections("SOUTH", vertical * -1);
    }
    console.log(correctDirections);

    return correctDirections;
};

module.exports = { shortenDirections };