'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agendamento.init({
    idUsuario: DataTypes.INTEGER,
    nomeCliente: DataTypes.STRING,
    telefoneCliente: DataTypes.STRING,
    dataAgendada: DataTypes.DATE,
    horarioAgendado: DataTypes.DATE,
    observacao: DataTypes.TEXT,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Agendamento',
  });
  return Agendamento;
};