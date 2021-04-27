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

// ==> Método responsável por atualizar um 'Usuario' pelo 'Id':
exports.updateUsuarioById = async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const { nome } = req.body;
  const response = await db.query(
    "UPDATE usuario SET nome = $1 WHERE id_usuario = $2",
    [nome, usuarioId]
  );
  res.status(200).send({ message: "Usuario Updated Successfully!" });
};

// ==> Método responsável por excluir um 'Usuario' pelo 'Id':
exports.deleteUsuarioById = async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  await db.query('DELETE FROM usuario WHERE id_usuario = $1', [
    usuarioId
  ]);
  res.status(200).send({ message: 'Usuario deleted successfully!', usuarioId });
};

// ==> Método responsável por listar todos os 'Usuarios':
exports.listAllUsuarios = async (req, res) => {
  const response = await db.query('SELECT * FROM usuario ORDER BY nome ASC');
  res.status(200).send(response.rows);
};