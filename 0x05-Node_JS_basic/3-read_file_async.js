const fs = require('fs').promises;

/**
 * Counts students from a CSV file and logs the results.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} - A promise that resolves when the processing is complete.
 * @throws {Error} - Throws an error if the file cannot be read.
 */
async function countStudents(path) {
  try {
    // Attempt to read file asynchronously
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1).map((line) => {
      const [firstName, lastName, age, field] = line.split(',');
      const result = {
        firstName, lastName, age: Number(age), field,
      };
      return result;
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    const fieldCounts = {}; // Initialized an empty dict
    students.forEach((student) => {
      if (!fieldCounts[student.field]) {
        fieldCounts[student.field] = [];
      }
      fieldCounts[student.field].push(student.firstName);
    });

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field].length;
        const list = fieldCounts[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
