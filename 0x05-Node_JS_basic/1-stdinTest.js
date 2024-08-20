const readline = require('readline');

// Interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display welcome message
console.log("Welcome to Holberton School, what is your name?");

// Prompt the user for their name
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);

  // Close the readline interface when the user inputs their name
  rl.close();
});

rl.on('close', () => {
  if (!process.stdin.isTTY) {
    console.log('This import program is now closing');
  }
});
