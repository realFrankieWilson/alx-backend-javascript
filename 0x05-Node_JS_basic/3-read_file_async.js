// 3-read_file_async.js
const fs = require('fs').promises;

async function countStudents(arg) {
  try {
    // Attempt to read the database file asyncronously
    const data = await fs.readFile(arg, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const studentsFiled = {};

    lines.slice(1).forEach((line) => {
      const [firstName, , , field] = line.split(',');

      if (!field || !firstName) return;

      if (!studentsFiled[field]) {
        studentsFiled[field] = [];
      }

      studentsFiled[field].push(firstName);
    });

    const totalStudents = lines.length - 1;

    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentsFiled) {
      if (Object.prototype.hasOwnProperty.call(studentsFiled, field)) {
        const studentList = studentsFiled[field];
        console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
