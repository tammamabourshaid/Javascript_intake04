//Object.values()
const icecreamColors = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red',
}

const colors = Object.values(icecreamColors);
console.log("Object.values :" + "\n" + colors);
// colors will be equal to ["brown", "white", "red"]
//---------------------------------------------
//Object.keys()
const icecreamColors1 = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red',
}

const types = Object.keys(icecreamColors1);
console.log("Object.keys :" + "\n" + types);
// types will be equal to ["chocolate", "vanilla", "strawberry"]
//-------------------------------------------------
//Object.entries()
const weather = {
    rain: 0,
    temperature: 24,
    humidity: 33,
}

const entries = Object.entries(weather);
console.log("Object.entries :" + "\n" + entries);
// entries will be equal to
// [['rain', 0], ['temperature', 24], ['humidity', 33]]
//------------------------------------------------
//Object spread
const spreadableObject = {
    name: 'Robert',
    phone: 'iPhone'
};

const newObject = {
    ...spreadableObject,
    carModel: 'Volkswagen'
}
console.log("Object spread :" + "\n");
console.log(newObject);

// newObject will be equal to
// { carModel: 'Volkswagen', name: 'Robert', phone: 'iPhone' }
//---------------------------------------------------------
//Function Rest
function displayArgumentsArray(...theArguments) {
    console.log("Function Rest :" + "\n");
    console.log(theArguments);
}

displayArgumentsArray('hi', 'there', 'bud');
// Will print ['hi', 'there', 'bud']
//------------------------------------------------------------
//Object.freeze()
const frozenObject = {
    name: 'Robert'
}

Object.freeze(frozenObject);

frozenObject.name = 'Henry';
console.log("Object.freeze :");

console.log(frozenObject);

// frozenObject will be equal to { name: 'Robert' }
//-----------------------------------------------------------
//Object.seal()


const sealedObject = {
    name: 'Robert'
}

Object.seal(sealedObject);

sealedObject.name = 'Bob';
sealedObject.wearsWatch = true;
console.log("Object.seal :")
console.log(Object.seal(sealedObject));

  // sealedObject will be equal to { name: 'Bob' }
//----------------------------------------------------------
