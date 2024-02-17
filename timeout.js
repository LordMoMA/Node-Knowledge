// Define a function to be executed after a delay
function sayHello() {
    console.log('Hello, world!');
  }
  
  // Schedule the function to be executed after 5 seconds
  const timeoutId = setTimeout(sayHello, 5000);
  
  // If the first command line argument is 'cancel', cancel the timeout
  if (process.argv[2] === 'cancel') {
    clearTimeout(timeoutId);
  }