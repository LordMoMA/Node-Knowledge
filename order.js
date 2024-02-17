console.log('start');
Promise.resolve().then(() => console.log('Promise'));
setTimeout(() => console.log('setTimeout'), 0);
process.nextTick(() => console.log('process.nextTick'));
setImmediate(() => console.log('setImmediate'));
console.log('end');

// Output:
// start
// end
// process.nextTick
// Promise
// setTimeout
// setImmediate

console.log('started 2');
setTimeout(function onTimeout() {
    console.log('setTimeout');
    }, 0);
setTimeout(()=>console.log('setTimeout 2'), 0);
console.log('Done');