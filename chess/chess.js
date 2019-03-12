
function chess (height, width) {

    for (let i = 1; i <= height; i++) {
      var separator = '';
      var row = '';
  
      for (let j = 1; j <= width; j++) {
        separator += '--';
        row+= '|';

        row+= ' ';
      }
      separator += '-';
      row+= '|';
      console.log(separator);
      console.log(row);
    }
  }
  

  chess(2,5);