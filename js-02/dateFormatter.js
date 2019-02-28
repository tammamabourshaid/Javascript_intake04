function dateFormatter(date) {


  let day = date.getDate();
  if (day <= 9)
    day = '0' + day;

  let month = date.getMonth() + 1;
  if (month <= 9)
    month = '0' + month;



  return date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ":" + date.getMinutes() + "0";
}
module.exports = { dateFormatter };


  //   let day = date.getDate();
  //   let monthIndex = date.getMonth();
  //   let year = date.getFullYear();
  //   //let date = new Date();
  //   let hour = date.getHours();
  //   let minute=date.getMinutes();


  //   return year + '-' + monthIndex.toString() + '-' + day+ ' '+hour+":"+minute;
  //  }
  //  module.exports={dateFormatter};
