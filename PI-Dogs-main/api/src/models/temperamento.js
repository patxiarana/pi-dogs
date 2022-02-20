
const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require("uuid");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('Temperamento', {
    name:{
      type: DataTypes.STRING,
    },
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
  },{
    timestamps: false
  });
};