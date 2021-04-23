/*'use strict';
const {
  Model
} = require('sequelize');*/
module.exports = (sequelize, DataTypes) => {
  const Causa = sequelize.define('Causa', {
    id_causa: DataTypes.INTEGER,
    nome: DataTypes.STRING
  });

  Causa.associate = function(models) {
    Causa.hasMany(models.Post, {
      foreignKey: 'idCausa',
      as: 'ongs',
      onDelete: 'CASCADE',
    });
  };

  return Causa;
};