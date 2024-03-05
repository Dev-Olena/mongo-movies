'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'movies',
          key: "id"
        },
        field: "movie_id"
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: "id"
        },
        field: "user_id"
      },
      deadline: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.ENUM,
        values: ['taken', 'returned', 'failed'],
        defaultValue:  'taken'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
    await queryInterface.addConstraint('rents', {
      fields: ['user_id', 'movie_id'],
      type: 'unique',
      name: 'user_movie_constraint'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rents');
  }
};