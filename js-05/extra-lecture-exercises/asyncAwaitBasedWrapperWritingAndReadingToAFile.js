const fileSystem = require('fs');

const file = 'js-05/extra-lecture-exercises/asyncAwaitBased';

const writeToFile = (fileName, data) => new Promise(resolve => fileSystem.writeFile(fileName, data, resolve));

const readFile = fileName => {
  return new Promise(resolve =>
    fileSystem.readFile(fileName, 'utf8', (error, data) => {
      error ? console.log(error.message) : resolve(data);
    }));
};

const writeAndReadFile = async () => {
  await writeToFile(file, `Async & await wrapper HYPE!`);
  console.log(await readFile(file));
};

writeAndReadFile();