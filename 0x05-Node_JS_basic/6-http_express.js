// 6-http_express.js
const express = require('express');

const app = express();

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle 404 erros for any other endpoint.
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="eng">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot Get ${req.path}</pre>
    </body>
    </html>`);
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
