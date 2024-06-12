"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Soldier", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      numberId: {
        type: Sequelize.INTEGER,
      },
      rank: {
        type: Sequelize.STRING,
      },
      weaponId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Weapon", // Name of the referenced table
          key: "id", // Primary key of the referenced table
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      mahlakaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Mahlaka", // Name of the referenced table
          key: "id", // Primary key of the referenced table
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("Soldier");
  },
};
