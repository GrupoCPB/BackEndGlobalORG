const db = require('../config/database');
// ==> Método responsável por criar um novo 'Usuario':
exports.createUsuario = async (req, res) => {
    const { nome, email } = req.body;
    const { rows } = await db.query(
      "INSERT INTO usuario (nome, email) VALUES ($1, $2)",
      [nome, email]
    );
    res.status(201).send({
      message: "Usuario added successfully!",
      body: {
        usuario: { nome, email }
      },
    });
  };

  // ==> Método responsável por listar todos os 'Usuarios':
exports.listAllUsuarios = async (req, res) => {
  const response = await db.query('SELECT * FROM usuario ORDER BY nome ASC');
  res.status(200).send(response.rows);
};