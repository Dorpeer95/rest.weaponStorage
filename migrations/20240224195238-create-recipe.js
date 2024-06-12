"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Recipe", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User", // Name of the referenced table
          key: "id", // Primary key of the referenced table
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      soliderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Soldier", // Name of the referenced table
          key: "id", // Primary key of the referenced table
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
      plogaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Ploga", // Name of the referenced table
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
    await queryInterface.dropTable("Recipe");
  },
};
