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


    // const correctDirections = [];

    // // if (direction.includes("NORTH") && direction.includes("SOUTH")) {
    // //     direction.push(correctDirections);
    // // }
    // // return direction;

    // direction.forEach(element => {
    //     if (element['NORTH']) {
    //         console.log(correctDirections);
    //         return correctDirections.push(element);
    //     }
    // });
    // return correctDirections;






    // const vertical = [],
    //     horizontal = [],
    //     correctDirection = [];

    // let n = 1,
    //     s = -1,
    //     e = 1,
    //     w = -1;

    // vertical.push(n, s);
    // horizontal.push(e, w);

    // const reducer = (accumulator, value) => accumulator + value;
    // const verticalSum = vertical.reduce(reducer);
    // const horizontalSum = horizontal.reduce(reducer);

    let vertical = 0,
        horizontal = 0;

    switch (direction) {
        case "NORTH":
            if (direction.includes("NORTH")) {
                return vertical++;
            }
            break;
        case "SOUTH":
            if (direction.includes("SOUTH")) {
                return vertical--;
            }
            break;
        case "EAST":
            if (direction.includes("EAST")) {
                return horizontal++;
            }
            break;
        case "WEST":
            if (direction.includes("WEST")) {
                return horizontal--;
            }
            break;
    }
    console.log(direction);
    return direction;
};

module.exports = { shortenDirections };