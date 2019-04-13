var cars = [{
    'make': 'audi',
    'model': 'r8',
    'year': '2012'
}, {
    'make': 'audi',
    'model': 'rs5',
    'year': '2013'
}, {
    'make': 'ford',
    'model': 'mustang',
    'year': '2012'
}, {
    'make': 'ford',
    'model': 'fusion',
    'year': '2015'
}, {
    'make': 'kia',
    'model': 'optima',
    'year': '2012'
}, ]
// const result=cars.reduce((r, a) => {
//     r[a.make] = [...r[a.make] || [], a];
//     return r;
//   }, {});

//   console.log(result);
//-------------------------------

// const result = cars.reduce(function (r, a) {
//     r[a.make] = r[a.make] || [];
//     r[a.make].push(a);
//     return r;
// }, Object.create(null));

// console.log(result);
//----------------------------------

//const result = {};

//  for(const {make, model, year} of cars) {
//    if(!result[make]) result[make] = [];
//    result[make].push({ model, year });
//  }
// console.log(result);
// console.log(cars);
//--------------------------------

// var outObject = cars.reduce(function (a, e) {
//     let estKey = (e['make']);

//     (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
//     return a;
// }, {});

// console.log(outObject);
//-----------------------------------

// let newcars = {}

// cars.forEach(car => {
//   newcars[car.make] ? // check if that array exists or not in newcars object
//     newcars[car.make].push({model: car.model, year: car.year,make:car.make})  // just push
//    : (newcars[car.make] = [], newcars[car.make].push({model: car.model, year: car.year,make:car.make})) // create a new array and push
// })

// console.log(newcars);
//----------------------------- 

// const groupBy = key => array =>
//     array.reduce(
//         (objectsByKeyValue, obj) => ({
//             ...objectsByKeyValue,
//             [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
//         }), {}
//     );

// const cars2 = [{
//         brand: 'Audi',
//         color: 'black'
//     },
//     {
//         brand: 'Audi',
//         color: 'white'
//     },
//     {
//         brand: 'Ferarri',
//         color: 'red'
//     },
//     {
//         brand: 'Ford',
//         color: 'white'
//     },
//     {
//         brand: 'Peugot',
//         color: 'white'
//     }
// ];
// const groupByBrand = groupBy('brand');
// const groupByColor = groupBy('color');

// console.log(
//     JSON.stringify({
//         carsByBrand: groupByBrand(cars2),
//         carsByColor: groupByColor(cars2)
//     }, null, 2)
// );
//-----------------------------------------
const events = [{
        time: '12:00',
        location: 'mall'
    },
    {
        time: '9:00',
        location: 'store'
    },
    {
        time: '9:00',
        location: 'mall'
    },
    {
        time: '12:00',
        location: 'store'
    },
    {
        time: '12:00',
        location: 'market'
    },
]

Array.prototype.groupBy = function (prop) {
    return this.reduce(function (groups, item) {
        const val = item[prop]
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
    }, {})
};


const groupByMake = events.groupBy('time');
console.log(groupByMake);
Array.prototype.groupBy = function (prop) {

}



const groupedByTime = events.groupBy('time')

const inputArray = [{
        Phase: "Phase 1",
        Step: "Step 1",
        Task: "Task 1",
        Value: "5"
    },
    {
        Phase: "Phase 1",
        Step: "Step 1",
        Task: "Task 2",
        Value: "10"
    },
    {
        Phase: "Phase 1",
        Step: "Step 2",
        Task: "Task 1",
        Value: "15"
    },
    {
        Phase: "Phase 1",
        Step: "Step 2",
        Task: "Task 2",
        Value: "20",
       
    },
    {
        Phase: "Phase 2",
        Step: "Step 1",
        Task: "Task 1",
        Value: "25"
    },
    {
        Phase: "Phase 2",
        Step: "Step 1",
        Task: "Task 2",
        Value: "30"
    },
    {
        Phase: "Phase 2",
        Step: "Step 2",
        Task: "Task 1",
        Value: "35"
    },
    {
        Phase: "Phase 2",
        Step: "Step 2",
        Task: "Task 2",
        Value: "40"
    }
];

var outObject = inputArray.reduce(function (a, e) {

    let estKey = (e['Phase']);

    (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
    return a;
}, {});

console.log(outObject);