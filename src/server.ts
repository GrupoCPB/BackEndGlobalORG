import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as dotenv from 'dotenv';
import promBundle from 'express-prom-bundle';
import helmet from 'helmet';
import routes from './Routes/routes';
import swaggerFile from './swagger.json';

import './database';

const metricsMiddleware = promBundle({ includeMethod: true });

dotenv.config();

const app = express();
app.use(helmet());

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(metricsMiddleware);
app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
