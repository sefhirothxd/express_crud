const { Sequelize } = require("sequelize");

const _config = require("../config/config.js");

const env = process.env.ENV;
const config = _config[env];
console.log("env: ", env);
console.log("config: ", config);
// create connection
const db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

module.exports = db;
