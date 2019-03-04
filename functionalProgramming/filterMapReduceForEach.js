//.filter()
const studentsAge = [17, 16, 18, 19, 21, 17];
const ableToDrink = studentsAge.filter(age => age > 18);
console.log("filter: " + "[" + ableToDrink + "]");
// ableToDrink will be equal to [19, 21]
//console.log(`filter  [${ableToDrink}]`);
//-----------------------------------
//.map()
const numbers1 = [2, 3, 4, 5];
const dollars = numbers1.map(number => '$' + number);
console.log("map : " + dollars);
// dollars will be equal to ['$2', '$3', '$4', '$5']
//-------------------------------------
//.reduce
const numbers = [5, 10, 15];
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("reduce: " + total);
// total will be equal to 30
//---------------------------
//other exercise with new method
const pipe = fns => {
    const initialValue = 0,
        reducer = ((accumulator, currentFunction) =>
            (currentFunction(accumulator))),
        toPipe = fns.reduce(reducer, initialValue);
    return toPipe;
};
//   function add() {
//       return 2 + 3;
//   }
const add = () => number1 = (2 + 3);
const multiply = number1 => number1 * 10;
const piped = pipe([add, multiply])
console.log(piped);
//will be equal 50
const initial = () => 1 * 1;
const multiply1 = number => number * 2;
console.log((pipe([initial, multiply1, multiply1, multiply1, multiply1])))
//will be equal to 16
//-----------------------------------------------------------------
//.forEach()
const emotions = ['happy', 'sad', 'angry'];
emotions.forEach(emotion =>
    console.log("forEach :" + "\n" + (emotions)));
// Will log the following:
// 'happy'
// 'sad'
// 'angry'
//--------------------------------------------