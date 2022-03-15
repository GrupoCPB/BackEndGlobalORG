import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import promBundle from 'express-prom-bundle';

import { router } from './Routes';

const app = express();
const metricsMiddleware = promBundle({ includeMethod: true });

app.use(helmet());
app.use(express.json());

app.use(metricsMiddleware);
app.use(router);

export default app;
