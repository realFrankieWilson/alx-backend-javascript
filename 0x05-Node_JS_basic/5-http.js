// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async');

// Creates an http server
const app = http.createServer(async (req, res) => {
  const { url } = req;

  // Set response header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');

    try {
      await countStudents(process.argv[2]);
      res.end();
    } catch (error) {
      res.end('Cannot load the database\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
