// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Initialize a map to hold the counts and names
    const students = {};

    // Process each line aside the header.
    for (let i = 1; i < lines.length; i + 1) {
      const [firstName, field] = lines[i].split(',');

      // Check if the field exists in the map
      if (field) {
        if (!students[field]) {
          students[field] = { count: 0, names: [] };
        }
        students[field].count += 1;
        students[field].names.push(firstName);
      }
    }

    // Get the total number of students
    const totalStudents = Object.values(students).reduce((acc, curr) => acc + curr.count, 0);

    // Display the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Display the number of students in each field
    for (const [field, { count, names }] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
