const router = require('express-promise-router')();
const ongController = require('../controllers/ong.controller');
// ==> Definindo as rotas do CRUD - 'Ong':
// ==> Rota responsável por criar um novo 'Ong': (POST): localhost:3000/api/ongs
//router.post('/ongs', ongController.createOng);
// ==> Rota responsável por listar todos os 'Ongs': (GET): localhost:3000/api/ongs
router.get('/ongs', ongController.listAllOngs);
module.exports = router;