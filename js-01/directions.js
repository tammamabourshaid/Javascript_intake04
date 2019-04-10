function shortenDirections(anArray){
    let x = 0;
    let y = 0;
    let outputArray = [];
    while (anArray.length != 0){
    let z = anArray.pop();
    switch(z) {
    case "NORTH":
      y++;
      break;
    case "SOUTH":
      y--;
      break;
    case "EAST":
      x++;
      break;
    case "WEST":
      x--;
      break;
    default:
      console.log("Where?");
  }  
    }
    while (x > 0){outputArray.push("EAST"); x--};
    while (x < 0){outputArray.push("WEST"); x++};
    while (y > 0){outputArray.push("NORTH"); y--};
    while (y < 0){outputArray.push("SOUTH"); y++};
    return outputArray;
  }
  module.exports = {shortenDirections};