function dateFormatter() {
    const time = new Intl.DateTimeFormat('de-De')

    return time.format(new Date('1999-01-01'));

}

module.exports = { dateFormatter };

