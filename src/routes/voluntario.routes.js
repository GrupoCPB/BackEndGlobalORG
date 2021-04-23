const router = require('express-promise-router')();
const voluntarioController = require('../controllers/voluntario.controller');
// ==> Definindo as rotas do CRUD - 'Voluntario':
// ==> Rota responsável por criar um novo 'Voluntario': (POST): localhost:3000/api/voluntarios
//router.post('/voluntarios', voluntarioController.createVoluntario);
// ==> Rota responsável por listar todos os 'Voluntarios': (GET): localhost:3000/api/voluntarios
router.get('/voluntarios', voluntarioController.listAllVoluntarios);
module.exports = router;