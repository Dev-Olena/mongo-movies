'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        field: "first_name"
      },
      lastName: {
        type: Sequelize.STRING,
        field: "last_name"
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING
      },
      favouriteFilms: {
        type: Sequelize.TEXT,
        field: "favourite_films"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};