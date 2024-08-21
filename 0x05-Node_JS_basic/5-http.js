const http = require('http');
const fs = require('fs').promises;

const hostname = 'localhost';
const port = 1245;

/**
 * Reads and parses the CSV file to return student data.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<string>} - A promise that resolves with the formatted student data.
 * @throws {Error} - Throws an error if the file cannot be read.
 */
async function getStudentData(path) {
  let result = '';
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1).map((line) => {
      const [firstName, lastname, age, field] = line.split(',');
      return {
        firstName,
        lastname,
        age: Number(age),
        field,
      };
    });

    const totalStudents = students.length;
    result += `This is the list of our students\nNumber of students: ${totalStudents}\n`;

    const fieldCounts = {};
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
        result += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }
    }
    return result; // Return the formatted result
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const data = await getStudentData('database.csv'); // Call the function and capture the result
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data); // Send the data as the response
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
