const fileSystem = require('fs');

const file = 'js-05/extra-lecture-exercises/promiseBasedText';

const writeToFile = (fileName, data) => {
  return new Promise(resolve => fileSystem.writeFile(fileName, data, resolve));
};

const readFile = fileName => {
  return new Promise(resolve =>
    fileSystem.readFile(fileName, 'utf8', (error, data) => {
      error ? console.log(error.message) : resolve(data);
    }));
};

writeToFile(file, `JavaScript is my favorite programming language!
I can't wait to start working really soon!`).then(() => console.log('File has been written.'));

readFile(file).then(data => console.log(data));