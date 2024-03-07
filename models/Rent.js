const {addDays} = require('date-fns');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Movie}) {
      // define association here
      Rent.belongsTo(User);
      Rent.belongsTo(Movie);
    }
  }
  Rent.init({
    deadline: {
      type: DataTypes.DATEONLY,
      defaultValue: addDays(new Date(), 10)
    },
    status: {
      type: DataTypes.ENUM('taken', 'returned', 'failed'),
      defaultValue: 'taken'
    }
  }, {
    sequelize,
    modelName: 'Rent',
    tableName: 'rents',
    underscored: true
  });
  return Rent;
};