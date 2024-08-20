const http = require('http');
const fs = require('fs').promises;

/**
 * Counts students from a CSV file and returns the results.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<string>} - A promise that resolves with the student data.
 * @throws {Error} - Throws an error if the file cannot be read.
 */
async function countStudents(path) {
  let result = ''; // Initialize a result string
  try {
    // Attempt to read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Map lines to student objects, ignoring the header
    const students = lines.slice(1).map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      result = {
        firstname, lastname, age: Number(age), field,
      };
      return result;
    });

    const totalStudents = students.length;
    result += `Number of students: ${totalStudents}\n`; // Append to result string

    const fieldCounts = {};
    students.forEach((student) => {
      if (!fieldCounts[student.field]) {
        fieldCounts[student.field] = [];
      }
      fieldCounts[student.field].push(student.firstname);
    });

    // Append the number of students in each field and their names
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field].length;
        const list = fieldCounts[field].join(', ');
        result += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }
    }
    return result; // Return the result string
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  const { url } = req; // Use object destructuring to get url from req

  // Set the response header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (url === '/') {
    // Respond to the root URL
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    // Respond to the /students URL
    res.write('This is the list of our students\n');

    try {
      // Capture the output of countStudents
      const studentData = await countStudents(process.argv[2]); // Pass the CSV file name
      res.write(studentData); // Write the student data to the response
      res.end(); // End the response
    } catch (error) {
      // Handle errors if the database cannot be loaded
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
