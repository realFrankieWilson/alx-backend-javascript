const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

// Function to count students from a CSV file
async function countStudents(fileName) {
  try {
    const students = {};
    const fields = {};

    const fileContents = await fs.readFile(fileName, 'utf-8');
    const lines = fileContents.trim().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line) {
        const field = line.split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }

    let result = `Number of students: ${lines.length - 1}\n`;

    for (const [key, value] of Object.entries(fields)) {
      result += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
    }
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Define the root endpoint
app.get('/', (req, res) => {
  res.type('text/plain'); // Set response type to plain text
  res.send('Hello Holberton School!');
});

// Define the /students endpoint
app.get('/students', async (req, res) => {
  res.type('text/plain'); // Set response type to plain text
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${data}`);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

// Export the app
module.exports = app;
