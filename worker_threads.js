import { Worker } from 'node:worker_threads';

let workers = [];
let timeStarted = Date.now();
let terminatedWorkers = 0;

for (let i = 0; i < 4; i++) {
  let worker = new Worker('./worker.js');
  worker.postMessage(i * 10); // Send data to the worker
  worker.on('message', (result) => {
    console.log(`Received result from worker: ${result}`);
    worker.terminate().then(() => {
      terminatedWorkers++;
      // Check if this is the last worker to finish
      if (terminatedWorkers === workers.length) {
        let timeEnded = Date.now();
        console.log('duration:' + (timeEnded - timeStarted) + 'ms');
      }
    });
  });
  workers.push(worker);
}