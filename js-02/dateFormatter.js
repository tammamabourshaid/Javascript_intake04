const dateFormatter= date => {
    
        let day = date.getDate();
        let month = date.getMonth() + 1; //Month from 0 to 11
        let year = date.getFullYear();
        return '' + year + '-' + (month<=9 ? '0' + month : month) + '-' + (day <= 9 ? '0' + day : day+ date.getHours()
         + ":" + date.getMinutes() + "0");
    }
module.exporters={dateFormatter};