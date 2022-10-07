const database = require("../config/config.js");

const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
const Sequelize = require("sequelize");

const models = {};
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const basename = path.basename(filename);

const config = database[process.env.ENV];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
  }
);

(async () => {
  const files = fs
    .readdirSync(dirname)
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );

  await Promise.all(
    files.map(async (file) => {
      const module = await import(path.join(dirname, file));
      const model = new module.default(sequelize, Sequelize.DataTypes);
      models[model.name] = model;
    })
  );

  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
})();

module.exports = { models, sequelize, Sequelize };
