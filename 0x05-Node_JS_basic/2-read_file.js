// 2-read_file.js
const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(file, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const studentsField = {};

    lines.slice(1).forEach((line) => {
      const [firstName, field] = line.split(',');

      // Skip empty fields
      if (!field || !firstName) return;

      if (!studentsField[field]) {
        studentsField[field] = [];
      }

      // Add first name to the corresponding field
      studentsField[field].push(firstName);
    });

    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentsField) {
      if (Object.prototype.hasOwnProperty.call(studentsField, field)) {
        const studentList = studentsField[field];
        console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
