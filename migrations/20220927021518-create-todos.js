"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("todo", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      disponible: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdOn: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("todo");
  },
};
