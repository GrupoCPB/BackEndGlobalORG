const express = require('express');
const cors = require('cors');
const app = express();
// ==> Rotas da API:
const index = require('./routes/index');
const usuarioRoute = require('./routes/usuario.routes');
const voluntarioRoute = require('./routes/voluntario.routes');
const ongRoute = require('./routes/ong.routes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(index);
app.use('/api/', usuarioRoute);
app.use('/api/', voluntarioRoute);
app.use('/api/', ongRoute);
module.exports = app;