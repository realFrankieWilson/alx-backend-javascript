const express = require('express');
const fs = require('fs').promises;

const app = express();
const hostname = '127.0.0.1';
const port = 1245;

const argParsed = process.argv;

if (argParsed.length !== 3) {
  console.log('Error');
  process.exit();
}
const file = argParsed[2].trim().toString();
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

    let result = (`Number of students: ${lines.length - 1}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        result += (`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const data = await countStudents(file);
    res.end(data);
  } catch (err) {
    res.end('Cannot load the database');
  }
});
app.listen(port, hostname, () => {
});

module.exports = app;
