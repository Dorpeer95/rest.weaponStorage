"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WeaponTypes extends Model {}
  WeaponTypes.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "WeaponTypes",
    }
  );
  return WeaponTypes;
};
