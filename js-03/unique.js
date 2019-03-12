const getUnique = (numbers) => {

    const values = ([...new Set(numbers)])

    // console.log(value);
    return values.sort((a, b) => a - b);
}

module.exports = { getUnique };
// const numbers=[1,2,2,3,3,4,5]
// const value=[...new Set(numbers)];
// console.log(value);

