const { Sequelize } = require("sequelize");
// import connection
const db = require("../config/database.js");

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Usuario = db.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombres: {
      type: DataTypes.STRING,
    },
    apellidos: {
      type: DataTypes.STRING,
    },
    edad: {
      type: DataTypes.INTEGER,
    },
    correo: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdOn: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "usuario",
  }
);

//export
module.exports = Usuario;
