const { Sequelize } = require("sequelize");
// import connection
const db = require("../config/database.js");

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Todo = db.define(
  "Todo",
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
    },
  },
  {
    tableName: "todo",
  }
);

//export
module.exports = Todo;
