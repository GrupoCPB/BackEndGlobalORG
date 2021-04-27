const router = require('express-promise-router')();
const voluntarioController = require('../controllers/voluntario.controller');
// ==> Definindo as rotas do CRUD - 'Voluntario':
// ==> Rota responsável por criar um novo 'Voluntario': (POST): localhost:3000/api/voluntarios
router.post('/voluntarios/:apelido', voluntarioController.createVoluntario);
// ==> Rota responsável por atualizar 'Voluntario' pelo 'Id': (PUT): localhost: 3000/api/voluntarios/:id
router.put('/voluntarios/:id', voluntarioController.updateVoluntarioById);
// ==> Rota responsável por excluir 'Voluntario' pelo 'Id': (DELETE): localhost:3000/api/voluntarios/:id
router.delete('/voluntarios/:id', voluntarioController.deleteVoluntarioById);
// ==> Rota responsável por listar todos os 'Voluntarios': (GET): localhost:3000/api/voluntarios
router.get('/voluntarios', voluntarioController.listAllVoluntarios);
module.exports = router;