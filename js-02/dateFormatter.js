function dateFormatter(input) {
    let z = new Date(input);
    let min;
    if (z.getMinutes() < 10) { min = '0' + z.getMinutes() } else { min = z.getMinutes() }
    let tag;
    if (z.getDate() < 10) { tag = '0' + z.getDate() } else { tag = z.getDate() }
    let mon;
    if ((z.getMonth() + 1) < 10) { mon = '0' + (z.getMonth() + 1) } else { mon = (z.getMonth() + 1) }

    output = (z.getFullYear() + '-' + mon + '-' + tag + ' ' + (z.getHours()) + ':' + min);
    return output;
}
module.exports = { dateFormatter };