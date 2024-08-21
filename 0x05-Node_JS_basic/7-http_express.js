// 7-http_express.js
const express = require('express');
// const countStudents = require('./3-read_file_async');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;

// Route for the root path.
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for /studens path.
app.get('/students', async (req, res) => {
  const dbFile = process.argv[2];

  if (!dbFile) {
    return res.status(500).send('Cannot load the database');
  }

  try {
    const data = await fs.readFile(dbFile, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const studentFiled = {};
    lines.slice(1).forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (!field || !firstName) return;

      if (!studentFiled[field]) {
        studentFiled[field] = [];
      }

      studentFiled[field].push(firstName);
    });

    const totalStudents = lines.length - 1;
    let response = `This is the list of our students\nNumber of students: ${totalStudents}`;

    for (const field in studentFiled) {
      if (Object.prototype.hasOwnProperty.call(studentFiled, field)) {
        const studentList = studentFiled[field];
        response += `\nNumber of students in ${field}: ${studentList.length}. List ${studentList.join(', ')}`;
      }
    }

    return res.send(response);
  } catch (err) {
    return res.status(500).send('Cannot load the database');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
