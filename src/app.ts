import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import promBundle from 'express-prom-bundle';

import './database';
import routes from './Routes';

const app = express();
const metricsMiddleware = promBundle({ includeMethod: true });

app.use(helmet());
app.use(express.json());

app.use(metricsMiddleware);
app.use(routes);

export default app;
