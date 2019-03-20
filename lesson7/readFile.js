let fs=require('fs');
fs.readFile('file.txt', 'utf8',(err, data) => {
   if (err) throw err;
   console.log(data);
 });

const data = new Uint8Array(Buffer.from('Hello Marj!\n'));
fs.writeFile('write.txt', data, (err) => {
 if (err) throw err;
 console.log('The file has been saved!');
});