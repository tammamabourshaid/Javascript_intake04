const shortenDirections = direction => {
    // let n = "NORTH";
    // let s = "SOUTH";

    // let w = "WEST";
    // let e = "EAST";

    // let vertical = 0;
    // let horizontal = 0;
    // let directionList = [];

    // direction.forEach(element => {
    //     if (element === "NORTH") {
    //         vertical++;
    //     }
    //     if (element === "SOUTH") {
    //         vertical--;
    //     }
    //     if (element === "WEST") {
    //         horizontal--;
    //     }
    //     if (element === "EAST") {
    //         horizontal++;
    //     }
    //     console.log(direction);
    // });
    // switch (direction) {

    //     case "NORTH":
    //     if (vertical === "NORTH")
    //         return vertical++;
    //     case "SOUTH":
    //         return vertical--;
    //     case "WEST":
    //         return horizontal--;
    //     case "EAST":
    //         return horizontal++;
    //     default:
    //         console.log("ERROR!");
    // }

    //direction.filter(element => direction.includes(element === "NORTH" && element === "SOUTH"));


    const correctDirections = [];

    if (direction.includes("NORTH") && direction.includes("SOUTH")) {
        direction.pop();
        direction.push(correctDirections);
    }
    if (direction.includes("SOUTH") && direction.includes("NORTH")) {
        direction.pop();
        direction.push(correctDirections);
    }
    if (direction.includes("WEST") && direction.includes("EAST")) {
        direction.pop();
        direction.push(correctDirections);
    }
    if (direction.includes("EAST") && direction.includes("WEST")) {
        direction.pop();
        direction.push(correctDirections);
    }
    return correctDirections;
};

module.exports = { shortenDirections };