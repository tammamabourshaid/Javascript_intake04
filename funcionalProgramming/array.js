
function operations(numbers) {
    const halves = numbers.map(x => x / 2);
    return halves;
}// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// const longWords = words.filter(word => word.length > 6);

const numbers = [2, 4, 8, 10];
const answer = operations(numbers);
console.log(answer);
//---------------------------------
const otherNumbers = [5, 6, 7, 8, 9, 10];
const otherAnswer = operations(otherNumbers);
console.log(otherAnswer);
//---------------------------------
//Array.from()
const newArray = Array.from('hello');
console.log("Array.from:" + "\n" + newArray);
// newArray will be equal to ['h', 'e', 'l', 'l', 'o']
//---------------------------------------------
const text = "I am Developpr";
const textSplit = text.split("");
console.log(textSplit);
//-------------------------------------------
//Array spread
const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];

const combined = [...spreadableOne, ...spreadableTwo];
console.log("Array spread :" + "\n" + combined);
// combined will be equal to [1, 2, 3, 4, 5, 6, 7, 8]
//---------
//Remove an array element without mutating the original array.

const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat'];
const mammals = [...animals.slice(0, 3), ...animals.slice(4)];
console.log("Array spread :" + "\n" + mammals);

// mammals will be equal to ['squirrel', 'bear', 'deer', 'rat']
//-----------------------------------------------------
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const minMax = [];
const max = Math.max(...array);
const min = Math.min(...array);
minMax.push(min, max);

console.log(minMax);

