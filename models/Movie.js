'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Rent}) {
      // define association here
      Movie.belongsToMany(User, {
        through: Rent,
        foreignKey: 'movieId'
      });
    }
  }
  Movie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director: {
      type: DataTypes.STRING
    },
    studio: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.TEXT
    },
    productionDate: {
      type: DataTypes.DATEONLY,
      field: "production_date"
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    },
    actors: {
      type: DataTypes.TEXT
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 10
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies',
    underscored: true
  });
  return Movie;
};