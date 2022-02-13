import dotenv from 'dotenv';
// import './database';
import app from './app';
import { swaggerDoc, swaggerServe } from './api_docs';

dotenv.config();

app.use('/api-docs', swaggerServe, swaggerDoc);

const port = process.env.PORT;
app.listen(port, () => console.log(`server running on ${port}`));
