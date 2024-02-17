const buf = Buffer.from('Hello, world!', 'utf-8');
console.log(buf);

const str = buf.toString('utf-8');
console.log(str); // Outputs: 'Hello, world!'


// data is a Buffer containing the contents of 'example.txt'. 
// You can convert it to a string to print the file's contents
fs.readFile('example.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });