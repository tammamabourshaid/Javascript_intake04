function getUnion(numbers1, numbers2) {
    
    let union = [];

    for (let index1 = 0; index1 < numbers1.length; index1++) {
        const number1 = numbers1[index1];

        for (let index2 = 0; index2 < numbers2.length; index2++) {
            const number2 = numbers2[index2];

            if (number1 === number2) {
                union.push(number1);
                break;
            }
        }
    }
    return union.sort();
}

module.exports = { getUnion };