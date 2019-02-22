
var shortenDirections;
switch (new DateDirection().getshortenDirections()) {
  case 0:
  shortenDirections = "North";
    break;
  case 1:
  shortenDirections = "South";
    break;
  case 2:
  shortenDirections = "South";
    break;
  case 3:
  shortenDirections = "East";
    break;
  case 4:
  shortenDirections = "West";
    break;
  case 5:
  shortenDirections = "North";
    break;
  case 6:
  shortenDirections = "West";
    break;
  default:
  shortenDirections = ++"West";

  
}

module.exports={shortenDirections }