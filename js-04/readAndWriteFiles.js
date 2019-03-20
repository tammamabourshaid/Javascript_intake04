let fs=require('fs');
fs.readFile('/home/hala/Documents/Frontend/i4-frontend-specialisation-master/js-04/readMe.txt', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  });

const data = new Uint8Array(Buffer.from('I am writing a file!\n'));
fs.writeFile('/home/hala/Documents/Frontend/i4-frontend-specialisation-master/js-04/writeMe.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

