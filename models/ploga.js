"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ploga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ploga.hasOne(models.Mahlaka, { foreignKey: "plogaId" });
      Ploga.hasOne(models.Recipe, { foreignKey: "plogaId" });
    }
  }
  Ploga.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ploga",
    }
  );
  return Ploga;
};
