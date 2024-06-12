"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipes.belongsTo(models.Soldier, { foreignKey: "soliderId" });
      Recipes.belongsTo(models.Weapon, { foreignKey: "weaponId" });
      Recipes.belongsTo(models.Ploga, { foreignKey: "plogaId" });
      Recipes.belongsTo(models.Mahlaka, { foreignKey: "mahlakaId" });
      Recipes.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Recipes.init(
    {
      status: DataTypes.BOOLEAN,
      UserId: DataTypes.INTEGER,
      soldierId: DataTypes.INTEGER,
      weaponId: DataTypes.INTEGER,
      mahlakaId: DataTypes.INTEGER,
      plogaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Recipe",
    }
  );
  return Recipes;
};
