// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async.js');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url == '/') {
    res.end('Hello Holberton School');
  } else if (req.url == '/students') {
    const db = process.argv[2];
    if (!db) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Database file path not provided');
      return;
    }

    try {
      await countStudents(db);
      res.end('This is the list of our students');
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
