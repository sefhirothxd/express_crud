const { Sequelize } = require("sequelize");
// import connection
const db = require("../config/database.js");

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Todo = db.define(
  "todo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdOn: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      field: "created_on",
    },
  },
  {
    tableName: "todo",
  }
);

//export
module.exports = Todo;
