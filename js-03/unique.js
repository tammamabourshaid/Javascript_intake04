const getUnique = (numbers) => {

    const value = ([...new Set(numbers)])

    // console.log(value);
    return value.sort();
}

module.exports = { getUnique };
// const numbers=[1,2,2,3,3,4,5]
// const value=[...new Set(numbers)];
// console.log(value);

