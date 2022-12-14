require("dotenv").config();

const config = {
  development: {
    username: process.env.PGUSER || "sefhiroth",
    password: process.env.PGPASSWORD || "probando",
    database: process.env.PGDATABASE || "larnu_test",
    host: process.env.PGHOST || "127.0.0.1",
    port: process.env.PGPORT || 5432,
    logging: console.log,
    dialect: "postgres",
  },
  test: {
    username: process.env.POSTGRES_USER || "sefhiroth",
    password: process.env.POSTGRES_PASSWORD || "probando",
    database: process.env.POSTGRES_DB || "larnu_test",
    host: process.env.POSTGRES_HOST || "127.0.0.1",
    port: process.env.POSTGRES_PORT || 5432,
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
