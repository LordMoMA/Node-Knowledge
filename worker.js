import { parentPort } from 'node:worker_threads';

parentPort.on('message', (data) => {
  let result = fibonacci(data);
  parentPort.postMessage(result);
});

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}