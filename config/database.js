const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "postgres://sefhiroth:probando@localhost:5432/larnudb"
);

//export
module.exports = db;
