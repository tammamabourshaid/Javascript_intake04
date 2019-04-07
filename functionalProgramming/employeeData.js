const fs = require("fs"); // https://nodejs.org/api/fs.html

const employees = [

    ["Section1" ,["Badi", "Raslan", "BirthDay", "7 - 04 - 1967", 'salarry', 2000],
                 ["Adeeb", "Zidan", "BirthDay", '7 - 04 - 1995', 'salarry', 2500]
    ],
    ['Section2', ['Aishana', 'Aishan', 'BirthDay', '7 - 04 - 1985', 'salarry', 3000]],

]

const writeToFile = (filename, data) => {

    return new Promise(resolve => fs.writeFile(filename, data, resolve))
}

writeToFile("employees.json", JSON.stringify(employees));

console.log("file employees has been written");