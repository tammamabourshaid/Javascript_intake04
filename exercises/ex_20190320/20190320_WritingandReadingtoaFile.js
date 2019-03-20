// read the file
let rf = require('fs');
rf.readFile('exercises/ex_20190320/message.txt', 'utf8', (err, data) => {

    if (err) throw err;
    console.log(data);
});

// --------------------------------------------------------------------------------
// Write a file

const data = new Uint8Array(Buffer.from('Print out: Hello ...\n' +
    'I am so Happy to Learn JS...'));
rf.writeFile('exercises/ex_20190320/message.txt', data, (err) => {
    if (err) throw err;
    console.log('Finish..File is saved!\n');
});