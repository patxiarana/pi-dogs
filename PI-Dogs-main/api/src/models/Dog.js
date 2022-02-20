const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    height:{
      type: DataTypes.INTEGER,
      allowNull: false
    },  
    weight:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    life_span:{
      type: DataTypes.INTEGER,
    },
    image:{
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false
  });

};  