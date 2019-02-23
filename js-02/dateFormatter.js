const dateFormatter=() => {
    let date=new Date();
    
return dateFormat(date, "dddd, mmmm dS, yyyy, h:MM");
}
module.exporters={dateFormatter};