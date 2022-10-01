const { Sequelize } = require("sequelize");

const _config = require("../config/config.js");

const env = process.env.ENV;
const config = _config[env];
// create connection
env === "development"
  ? (db = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: "postgres",
      define: {
        timestamps: false,
      },
      dialectOptions: {
        ssl: {
          require: "true",
        },
      },
    }))
  : (db = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: "postgres",
      define: {
        timestamps: false,
      },
    }));

// const db = new Sequelize(process.env.DB_LINK, {
//   dialect: "postgres",
//   protocol: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: "true",
//     },
//   },
// });

module.exports = db;
