import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as dotenv from 'dotenv';
import routes from './Routes/routes';
import swaggerFile from './swagger.json';

import './database';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
