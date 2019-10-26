const dotenv = require('dotenv');
const createServer = require('./createServer');
const db = require('./db');

dotenv.config();

const app = createServer();

app.start({
  cors: {
    credentials: true,
    origin: process.env.FRONT_END_URL
  }
}, ({ port }) => console.log(`App is running on http://localhost:${port}`));
