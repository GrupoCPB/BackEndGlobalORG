const router = require('express-promise-router')();
const usuarioController = require('../controllers/usuario.controller');
// ==> Definindo as rotas do CRUD - 'Usuario':
// ==> Rota responsável por criar um novo 'Usuario': (POST): localhost:3000/api/usuarios
//router.post('/usuarios', usuarioController.createUsuario);
// ==> Rota responsável por listar todos os 'Usuarios': (GET): localhost:3000/api/usuarios
router.get('/usuarios', usuarioController.listAllUsuarios);
module.exports = router;