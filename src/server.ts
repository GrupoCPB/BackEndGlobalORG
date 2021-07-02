import express from 'express';
import * as dotenv from 'dotenv';
import routes from './Routes/routes';

import './database';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
