import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/users';
const cors = require('cors');

const app = express();
const port = 5000;

// Parse incoming JSON data
app.use(bodyParser.json());

// Allow CORS for all routes
app.use(cors());

// Register user routes
app.use('', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
