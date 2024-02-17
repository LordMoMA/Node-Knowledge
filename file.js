import fs from 'fs';

let data = 'Hello, World from Helen!';

const queue = [];

function processQueue() {
  if (queue.length === 0) {
    return;
  }

  const { data, callback } = queue.shift();

  fs.appendFile('myfile.txt', data, 'utf8', (err) => {
    if (callback) {
      callback(err);
    }

    // Process the next item in the queue
    processQueue();
  });
}

function queueWrite(data, callback) {
  queue.push({ data, callback });

  // If this is the only item in the queue, start processing the queue
  if (queue.length === 1) {
    processQueue();
  }
}

// Usage
queueWrite(data, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('File has been written');
});

// fs.writeFile('myfile.txt', data, 'utf8', (err) => {
//     if (err) {
//       console.error('An error occurred:', err);
//       return;
//     }
//     console.log('File has been written');
//   });

fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('File contents:', data);
});



