import { type } from 'os';
import { Model, Sequelize, DataTypes, BuildOptions } from 'sequelize';

interface Voluntarios extends Model {
  readonly id: string;
  apelido: string;
  cpf: string;
  data_nascimento: string;
  sexualidad: number;
  portador_deficiencie: boolean;
  profissao: string;
  formacao: string;
  habilidades: string;
  telefone: string;
  telefone_outro: string;
  endereco: string;
  complemento: string;
  municipio: string;
  uf: string;
  cep: string;
  link_cv: string;
  sobre: string;
  foto_capa: string;
  foto_rosto: string;
  created_at: Date;
  updated_at: Date;
}
type VoluntariosStatic = typeof Model & {
  new (values?: Partial<Voluntarios>, options?: BuildOptions): Voluntarios;
};

export default function build(sequelize: Sequelize) {
  const Voluntarios = sequelize.define(
    'voluntarios',
    {
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
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  ) as VoluntariosStatic;
  return Voluntarios;
}
