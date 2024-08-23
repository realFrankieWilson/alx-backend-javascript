const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7865;

app.use(bodyParser.json()); // Middleware to parse JSON bodies.

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;

  if (!isNaN(id) && Number.isInteger(+id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
