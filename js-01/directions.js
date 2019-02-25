const shortenDirections = (directions) => {
  let x = 0;
  let y = 0;
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    switch (direction) {
      case "NORTH":
        y++;
        break;
      case "EAST":
        x++;
        break;
      case "SOUTH":
        y--;
        break;
      case "WEST":
        x--;
        break;
    }
  }

  const shortenDirections = [];
  function addDirections(direction, amount) {
    for (let i = 0; i < amount; i++) {
      shortenDirections.push(direction);
    }
  }
  if(x > 0) {
    addDirections("EAST", x);
  }
  if(x < 0) {
    addDirections("WEST", x * -1);
  }
  if(y > 0) {
    addDirections("NORTH", y);
  }
  if(y < 0) {
    addDirections("SOUTH", y * -1);
  }
  return shortenDirections;
};

module.exports = {
  shortenDirections
}