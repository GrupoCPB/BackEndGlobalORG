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

// ==> Método responsável por atualizar um 'Ong' pelo 'Id':
exports.updateOngById = async (req, res) => {
  const ongId = parseInt(req.params.id);
  const { nome } = req.body;
  const response = await db.query(
    "UPDATE ong SET nome = $1 WHERE id_ong = $2",
    [nome, ongId]
  );
  res.status(200).send({ message: "Ong Updated Successfully!" });
};

// ==> Método responsável por excluir um 'Ong' pelo 'Id':
exports.deleteOngById = async (req, res) => {
  const ongId = parseInt(req.params.id);
  await db.query('DELETE FROM ong WHERE id_ong = $1', [
    ongId
  ]);
  res.status(200).send({ message: 'Ong deleted successfully!', ongId });
};

// ==> Método responsável por listar todos os 'Ongs':
exports.listAllOngs = async (req, res) => {
  const response = await db.query('SELECT * FROM ong ORDER BY nome ASC');
  res.status(200).send(response.rows);
};