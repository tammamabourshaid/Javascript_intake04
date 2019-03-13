
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
//----------------------------

const flights = [["Dmm", 'JED', '7:30am'], ["RYD", 'JED', '8:30pm'], ["MEK", 'JED', '10:30am']];
flights.forEach(function (flight, i) {

    [fromCity, toCity, Time] = flight

    console.log(`${i+1}.A flight from ${fromCity} to ${toCity} at ${Time}`);
    
});


function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      },100 );
    });
  }
  
  async function msg1() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
  
  msg1(); // Message: 🤡 <-- after 2 seconds

  function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 200);
    });
  }
  
   function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
      }, 300);
    });
  }
  function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in the shadows');
    }, 500);
  });
}

async function msg() {
  const a = await who();
  const b = await what();
  const c = await where();

  console.log(`${ a } ${ b } ${ c }`);
}

msg(); // 🤡 lurks in the shadows <-- after 1 second

async function msg3() {
    const [a, b, c] = await Promise.all([who(), what(), where()]);
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg3(); // 🤡 lurks in the shadows <-- after 500ms

  function yayOrNay() {
    return new Promise((resolve, reject) => {
      const val = Math.round(Math.random() * 1); // 0 or 1, at random
  
      val ? resolve('Lucky!!') : reject('Nope 😠');
    });
  }
  
  async function msg() {
    try {
      const msg = await yayOrNay();
      console.log(msg);
    } catch(err) {
      console.log(err);
    }
  }
  
  msg(); // Lucky!!
  msg(); // Lucky!!
  msg(); // Lucky!!
  msg(); // Nope 😠
  msg(); // Lucky!!
  msg(); // Nope 😠
  msg(); // Nope 😠
  msg(); // Nope 😠
  msg(); // Nope 😠
  msg(); // Lucky!!


  
  
  