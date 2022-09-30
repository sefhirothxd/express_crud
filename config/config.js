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
        require: "true",
      },
    },
  },
  test: {
    username: process.env.DB_TEST_USER || "sefhiroth",
    password: process.env.DB_TEST_PASSWORD || "probando",
    database: process.env.DB_TEST_DB_NAME || "test_larnu",
    host: process.env.DB_TEST_HOST || "127.0.0.1",
    port: process.env.DB_TEST_PORT || 5432,
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
