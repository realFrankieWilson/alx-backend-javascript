const fs = require('fs').promises;

/**
 * Counts students from a CSV file and return the results.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<string>} - A promise that resolves with the processing result
 * @throws {Error} - Throws an error if the file cannot be read.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1).map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname,
        lastname,
        age: Number(age),
        field,
      };
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    const fieldCounts = {};
    students.forEach((student) => {
      if (!fieldCounts[student.field]) {
        fieldCounts[student.field] = [];
      }
      fieldCounts[student.field].push(student.firstname);
    });

    // Log the number of students in their respective field
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field].length;
        const list = fieldCounts[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
