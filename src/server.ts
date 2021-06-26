//= > imports
import express from 'express';
import 'dotenv/config';
// import path from "path"
// import { routes } from "./routes"

const app = express();

app.use(express.json());
//= =>  routes
// app.use(routes);

app.get('/', (req, res) => {
  res.send('Inicio do projeto');
});

const port = 3333;

app.listen(process.env.DEV_PORT || port, () => {
  console.log('Server runing in port ');
});
