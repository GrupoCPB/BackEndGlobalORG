const db = require('../config/database');
// ==> Método responsável por criar um novo 'Voluntario':
exports.createVoluntario = async (req, res) => {
  const { apelido, cpf } = req.body;
  const { rows } = await db.query(
    "INSERT INTO voluntario (apelido, cpf) VALUES ($1, $2)",
    [apelido, cpf]
  );
  res.status(201).send({
    message: "Voluntario added successfully!",
    body: {
      voluntario: { apelido, cpf }
    },
  });
};

// ==> Método responsável por listar todos os 'Voluntarios':
exports.listAllVoluntarios = async (req, res) => {
  const response = await db.query('SELECT * FROM voluntario ORDER BY apelido ASC');
  res.status(200).send(response.rows);
};