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

// ==> Método responsável por atualizar um 'Voluntario' pelo 'Id':
exports.updateVoluntarioById = async (req, res) => {
  const voluntarioId = parseInt(req.params.id);
  const { apelido } = req.body;
  const response = await db.query(
    "UPDATE voluntario SET apelido = $1 WHERE id_voluntario = $2",
    [apelido, voluntarioId]
  );
  res.status(200).send({ message: "Voluntario Updated Successfully!" });
};

// ==> Método responsável por excluir um 'Voluntario' pelo 'Id':
exports.deleteVoluntarioById = async (req, res) => {
  const voluntarioId = parseInt(req.params.id);
  await db.query('DELETE FROM voluntario WHERE id_voluntario = $1', [
    voluntarioId
  ]);
  res.status(200).send({ message: 'Voluntario deleted successfully!', voluntarioId });
};

// ==> Método responsável por listar todos os 'Voluntarios':
exports.listAllVoluntarios = async (req, res) => {
  const response = await db.query('SELECT * FROM voluntario ORDER BY apelido ASC');
  res.status(200).send(response.rows);
};