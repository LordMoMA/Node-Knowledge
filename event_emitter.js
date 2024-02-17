import fs from 'fs';

// Create a writable stream
let writableStream = fs.createWriteStream('output.txt');

// Write data to stream
writableStream.write('Hello, World!\n', 'UTF8');
writableStream.write('Another line of text.\n', 'UTF8');

// Mark the end of file
writableStream.end();

// Handle stream events --> finish, and error
writableStream.on('finish', function() {
    console.log('Writing completed.');
});

writableStream.on('error', function(err){
    console.log('An error occurred:', err);
});

// reading from stream

// Create a readable stream
let readableStream = fs.createReadStream('output.txt');

// Handle stream events --> data, end, and error
readableStream.on('data', function(chunk) {
    console.log('Received data: ' + chunk);
});

readableStream.on('end', function(){
    console.log('Reading ended');
});

readableStream.on('error', function(err){
    console.log('An error occurred:', err);
});