require("dotenv").config();

const config = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DB_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
  test: {
    username: process.env.PGUSER || "sefhiroth",
    password: process.env.PGPASSWORD || "probando",
    database: process.env.PGDATABASE || "larnu_test",
    host: process.env.PGHOST || "127.0.0.1",
    port: process.env.PGPORT || 5432,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};

module.exports = config;
