"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mahlaka extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mahlaka.hasOne(models.Soldier, { foreignKey: "mahlakaId" });
      Mahlaka.hasOne(models.Recipe, { foreignKey: "mahlakaId" });
      Mahlaka.belongsTo(models.Ploga, { foreignKey: "plogaId" });
    }
  }
  Mahlaka.init(
    {
      name: DataTypes.STRING,
      plogaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Mahlaka",
    }
  );
  return Mahlaka;
};
