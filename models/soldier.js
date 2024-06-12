"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Soldier extends Model {
    static associate(models) {
      Soldier.belongsTo(models.Weapon, { foreignKey: "weaponId" });
      Soldier.belongsTo(models.Mahlaka, { foreignKey: "mahlakaId" });
      Soldier.hasOne(models.Recipe, { foreignKey: "soliderId" });
    }
  }
  Soldier.init(
    {
      fullName: DataTypes.STRING,
      NumberId: DataTypes.INTEGER,
      rank: DataTypes.STRING,
      weaponId: DataTypes.INTEGER,
      mahlakaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Soldier",
    }
  );
  return Soldier;
};
