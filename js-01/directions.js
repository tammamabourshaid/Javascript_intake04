const shortenDirections = directions => {
    let vertical = 0,
        horizontal = 0;

    for (let times = 0; times < directions.length; times++) {
        const direction = directions[times];
        switch (direction) {
            case "NORTH":
                vertical++;
                break;
            case "SOUTH":
                vertical--;
                break;
            case "EAST":
                horizontal++;
                break;
            case "WEST":
                horizontal--;
                break;
        }
    }

    const correctDirections = [];
    const putCorrectDirections = (direction, times) => {
        for (let position = 0; position < times; position++) {
            correctDirections.push(direction);
        };
    };

    if (vertical > 0) {
        putCorrectDirections("NORTH", vertical);
    }
    if (vertical < 0) {
        putCorrectDirections("SOUTH", vertical * -1);
    }
    if (horizontal > 0) {
        putCorrectDirections("EAST", horizontal);
    }
    if (horizontal < 0) {
        putCorrectDirections("WEST", horizontal * -1);
    }
    
    return correctDirections;
};

module.exports = { shortenDirections };