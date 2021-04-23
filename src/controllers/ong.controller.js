const db = require('../config/database');
// ==> Método responsável por criar uma nova 'Ong':
exports.createOng = async (req, res) => {
  const { nome, cnpj } = req.body;
  const { rows } = await db.query(
    "INSERT INTO ong (nome, cnpj) VALUES ($1, $2)",
    [nome, cnpj]
  );
  res.status(201).send({
    message: "Ong added successfully!",
    body: {
      voluntario: { nome, cnpj }
    },
  });
};


// ==> Método responsável por listar todos os 'Ongs':
exports.listAllOngs = async (req, res) => {
  const response = await db.query('SELECT * FROM ong ORDER BY nome ASC');
  res.status(200).send(response.rows);
};