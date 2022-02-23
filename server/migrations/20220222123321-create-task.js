'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customer_first_name: {
        type: Sequelize.STRING,
      },
      customer_first_name: Sequelize.STRING,
      personnel_first_name: Sequelize.STRING,
      personnel_other_name: Sequelize.STRING,
      customer_last_name: Sequelize.STRING,
      customer_phone: Sequelize.STRING,
      agentId: Sequelize.INTEGER,
      assigned: Sequelize.DATE,
      in_progress: Sequelize.DATE,
      completed: Sequelize.BOOLEAN,
      deffered: Sequelize.DATE,
      status: Sequelize.STRING,
      location: Sequelize.STRING,
      gender: Sequelize.STRING,
      age: Sequelize.STRING,
      access_code: Sequelize.INTEGER,
      splash_page: Sequelize.STRING,
      autoplay: Sequelize.STRING,
      comments: Sequelize.STRING,
      registration: Sequelize.STRING,
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  },
};
