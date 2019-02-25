function dateFormatter(date) {
  
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  //let date = new Date();
  let hour = date.getHours();
  let minute=date.getMinutes();


  return year + '-' + monthIndex.toString() + '-' + day+ ' '+hour+":"+minute;
}
module.exports={dateFormatter};

