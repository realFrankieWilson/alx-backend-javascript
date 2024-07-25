// 1-stdin.js

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Welcome message
console.log('Welcome to Holberton School, what is your name?');

// Prompt the user for their name
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);

  // Automatically close the interface after displaying the name
  rl.close();
});

// Handle the close event
rl.on('close', () => {
  console.log('This important software is now clossing');
  process.exit(0);
});
