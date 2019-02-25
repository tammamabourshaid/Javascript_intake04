function dateFormatter(date){

    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    
    let formattedDate = year + '-' + month + '-' + day + " " + hours + ":" +
     minutes + seconds;
    return formattedDate;
}

module.exports = {dateFormatter};





// let minutes = date.getUTCMinutes();
// let hours = date.getHours();
// let date1 = date.getDate();
// let month = date.getUTCMonth(); 
// let year = date.getFullYear();

// let dateString = year + "-" +(month + 1) + "-" + date1 + "-" 
// + hours + "-" + minutes + "-" + seconds;