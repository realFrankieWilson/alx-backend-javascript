const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School\n');
  } else if (req.url === '/students') {
    try {
      const data = await countStudents('database.csv');
      res.end(data);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`));
