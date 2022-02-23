'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Task.init(
    {
      customer_first_name: DataTypes.STRING,
      personnel_first_name: DataTypes.STRING,
      personnel_other_name: DataTypes.STRING,
      customer_last_name: DataTypes.STRING,
      customer_phone: DataTypes.STRING,
      agentId: DataTypes.INTEGER,
      assigned: DataTypes.DATE,
      in_progress: DataTypes.DATE,
      completed: DataTypes.BOOLEAN,
      deffered: DataTypes.DATE,
      status: DataTypes.STRING,
      location: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.STRING,
      access_code: DataTypes.INTEGER,
      splash_page: DataTypes.STRING,
      autoplay: DataTypes.STRING,
      comments: DataTypes.STRING,
      registration: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );
  return Task;
};
