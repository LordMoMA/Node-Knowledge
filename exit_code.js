// Exiting with a success code (0)
// console.log('Everything went well');
// process.exit(0);

// Exiting with an error code (1)
// console.error('An error occurred');
// process.exit(1);


// Handling uncaught exceptions
// process.on('uncaughtException', (err) => {
//     console.error('Caught exception: ', err);
//     process.exit(1);
//   });
  
//   // Intentionally cause an exception, but don't catch it.
//   nonexistentFunction();


// Handling unhandled promise rejections
// You can check the exit code of the last terminated process in a Unix-like system by running echo $? in the terminal.
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(14);
  });
  
  // Create a promise that rejects but doesn't have a catch handler.
  new Promise((resolve, reject) => reject(new Error('Fail'))); 