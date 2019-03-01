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
const numbers2 = [5, 10, 15];
const total = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("reduce : " + "\n" + total);
// total will be equal to 30
//-----------------------------------------
//.forEach()
const emotions = ['happy', 'sad', 'angry'];
emotions.forEach(emotion =>
    console.log("forEach :" + "\n" + (emotions)));
// Will log the following:
// 'happy'
// 'sad'
// 'angry'
//--------------------------------------------