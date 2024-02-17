import {spawn} from 'child_process';

// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

//////////////////////////////////////////////

// Creating a pipeline of processes: You can use child_process to create a pipeline of processes, 
// where the output of one process is the input of the next. 
// This is similar to using pipes (|) in a Unix shell.
const ls = spawn('ls', ['-lh', '/usr']);
const wc = spawn('wc', ['-l']);

ls.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log(`Number of files: ${data}`);
});