const fs = require("fs")

fs.readFile("employees.json", (err, content) => {

    const employees = JSON.parse(content);
    console.log(employees);
    console.log('------------------');
    employees.forEach(function (employee, i) {

        [section, firstName, lastName,bierthday, salary] = employee

        console.log(`${i + 1}-section : ${section}- firstName  :${firstName}- lastName  :${lastName}- bierthday :${bierthday}- salary  :${salary} `);
    });

    console.log(employees);
})