import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});

rl.on('close', () => {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});

// Path: output.js
console.log('Hello world');