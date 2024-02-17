import { performance, PerformanceObserver } from 'perf_hooks';
import { promisify } from 'util';

const sleep = promisify(setTimeout);

const obs = new PerformanceObserver((items) => {
    const entry = items.getEntries()[0];
    console.log(`Time taken for ${entry.name}: ${entry.duration}ms`);
    performance.clearMarks();
});

obs.observe({ entryTypes: ['measure'] });

async function run() {
    performance.mark('A');
    await sleep(1000); // simulate async operation
    performance.mark('B');
    performance.measure('A to B', 'A', 'B');
}

run();

// ➜  node-knowledge node perf_hooks.js
// Time taken for A to B: 1003.270458ms