const dateFormatter = (date) => {
    return date.getFullYear() + "-" + ('0' + parseInt(date.getMonth() + 1)).slice(-2) + "-" + ('0' + parseInt(date.getDate())).slice(-2) + " " + date.getHours() + ":" + ('0' + date.getMinutes()).slice(-2)
}

module.exports = {
    dateFormatter
}