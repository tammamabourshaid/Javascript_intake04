function getUnion(numbers1, numbers2){
    let union = [];

    for (let position1 = 0; position1 < numbers1.length; position1++) {
        const number1 = numbers1[position1];

        for (let position2 = 0; position2 < numbers2.length; position2++) {
            const number2 = numbers2[position2];

            if (number1 === number2){
                union.push(number1);
                position2 = numbers2.length;
            }            
        }
    }
    console.log("UNION" + union)
    return union.sort();
}

module.exports = {getUnion};