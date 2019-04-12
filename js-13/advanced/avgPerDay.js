const _ = require("lodash");
const fs = require("fs");
const moment= require("moment");



// function avgPerDay(){

//     let information = getInfoFromFile();
//     const sum = 0;

//     if(moment().day.)
        
    
// }


function getInfoFromFile(){
   const info = fs.readFileSync('/Users/ace/Desktop/FrontEnd-js/i4-frontend-specialisation/js-13/advanced/history_export_2019-04-07T06_40_00.csv', 'utf8', function(err, contents) {
  
    let sort = _.sortBy(info,)

    console.log(info);
});

   console.log(info);
}
getInfoFromFile();
avgPerDay();