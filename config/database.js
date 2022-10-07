const { Sequelize } = require("sequelize");

const _config = require("../config/config.js");

const env = process.env.ENV;
const config = _config[env];
// create connection

// create connection

env === "development"
  ? (db = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      port: config.port,
      dialect: "postgres",
      logging: config.logging,
      define: {
        timestamps: false,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }))
  : (db = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      port: config.port,
      dialect: "postgres",
      logging: config.logging,
      define: {
        timestamps: false,
      },
    }));

// const db = new Sequelize(
//   "postgresql://postgres:AHBb6wcVeOCLYyIQqzQn@containers-us-west-64.railway.app:6923/railway",
//   {
//     dialect: "postgres",
//   }
// );

module.exports = db;
