function getFrequency(eini) {
    let freq = {};
    for (let i = 0; i < eini.length; i++) {
        console.log('schleife');
        let character = eini[i];
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
    console.log(freq);
    return freq;
};

module.exports = { getFrequency };