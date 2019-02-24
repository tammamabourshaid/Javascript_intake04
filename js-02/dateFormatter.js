function dateFormatter() {
    const time = new Intl.DateTimeFormat('de-De')
        // const event = new Date();


    return time.format(new Date('1999-01-01'));

}

module.exports = { dateFormatter };

