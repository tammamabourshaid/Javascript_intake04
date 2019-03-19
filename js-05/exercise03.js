function addNumOne(callback) {
    setTimeout(() => callback(1), 1000);
};

const one = addNumOne(function (number) {
    // console.log(number);
    return number;
});

const getNumberFive = function () {
    return new Promise(resolve =>
        resolve(5));
};

const getNumber = async function () {
    const takeNumber = await getNumberFive();
    console.log(takeNumber);
    return takeNumber;
};
// getNumber();
// function addTwoNumbers(one, five) {
// console.log(one+five);
// const addTwoNumbers = async function() {
//     const one = await addNumOne();
//     const two = await getNumber();
//     console.log(one+two);
// };
const addTwoNumbers = async function () {
    const five = await getNumberFive();
    addNumOne(function(number){
      let one=number;
      console.log("result: ", one + five);

    })   

};
addTwoNumbers();

