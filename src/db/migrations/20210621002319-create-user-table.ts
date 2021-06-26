import { QueryInterface, DataTypes } from 'sequelize';

async function up(q: QueryInterface) {
  await q.createTable('voluntarios', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    apelido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    data_nascimento: {
      type: DataTypes.DATE,
    },
    sexualidad: {
      type: DataTypes.INTEGER,
    },
    portador_deficiencie: {
      type: DataTypes.BOOLEAN,
    },
    profissao: {
      type: DataTypes.STRING,
    },
    formacao: {
      type: DataTypes.STRING,
    },
    habilidades: {
      type: DataTypes.STRING,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    telefone_outro: {
      type: DataTypes.STRING,
    },
    endereco: {
      type: DataTypes.STRING,
    },
    complemento: {
      type: DataTypes.STRING,
    },
    municipio: {
      type: DataTypes.STRING,
    },
    uf: {
      type: DataTypes.STRING,
    },
    cep: {
      type: DataTypes.STRING,
    },
    link_cv: {
      type: DataTypes.STRING,
    },
    sobre: {
      type: DataTypes.STRING,
    },
    foto_capa: {
      type: DataTypes.STRING,
    },
    foto_rosto: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
}
async function down(q: QueryInterface) {
  await q.dropTable('voluntarios');
}

export default { up, down };
