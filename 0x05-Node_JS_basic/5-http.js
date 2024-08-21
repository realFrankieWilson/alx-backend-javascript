const http = require('http');
const fs = require('fs').promises;

/**
 * Counts students from a CSV file and logs the results.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} - A promise that resolves when the processing is complete.
 * @throws {Error} - Throws an error if the file cannot be read.
 */
async function countStudents(path) {
  let result = '';
  try {
    // Attempt to read the file asyncchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Map line to student objects, ignoring the header
    const students = lines.slice(1).map((line) => {
      const [firstName, lastName, age, field] = line.split(',');
      const context = {
        firstName,
        lastName,
        age: Number(age),
        field,
      };
      return context;
    });

    const totalStudents = students.length;
    result += `Number of students: ${totalStudents}\n`;

    const fieldCounts = {};
    students.forEach((student) => {
      if (!fieldCounts[student.field]) {
        fieldCounts[student.field] = [];
      }
      fieldCounts[student.field].push(student.firstName);
    });

    // Append the number of students in each field and their names
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field].length;
        const list = fieldCounts[field].join(', ');
        result += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }
    }
    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  const { url } = req;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (url === '/') {
    // Respond to the root URL
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    try {
      // Attempt to Capture the output of countStudents
      res.write('This is the list of our studentss\n');
      const studentData = await countStudents(process.argv[2]);

      // write the student data to the response
      res.write(studentData);
      res.end();
    } catch (error) {
      res.end('Cannot load the database\n');
    }
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app variable
module.exports = app;
