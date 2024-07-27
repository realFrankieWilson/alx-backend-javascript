// full_server/server.js
import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = 1245;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
