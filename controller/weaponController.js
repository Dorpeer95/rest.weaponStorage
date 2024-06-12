const { Weapon } = require("../models");
const { WeaponTypes } = require("../models");
const weaponService = require("../service/weaponService");

const getAllWeapons = async (req, res) => {
  try {
    const weapons = await weaponService.getWeaponDashBoard();

    if (!weapons) {
      throw new Error("No Weapons has been found");
    }
    res.status(200).json(weapons);
  } catch (error) {
    console.error("Error querying database:", error);
    res.status(500).json({ error: "Error querying database" });
  }
};

const addWeapon = async (req, res) => {
  try {
    const { type, weaponNumber } = req.body;

    if (!type) {
      return res.status(400).json({ message: "חסר סוג נשק" });
    }

    if (!weaponNumber) {
      return res.status(400).json({ message: "חסר מספר נשק" });
    }

    const weaponType = await WeaponTypes.findOne({ where: { type } });
    if (!weaponType) {
      return res.status(404).json({ message: "סוג הנשק לא נמצא" });
    }

    const newWeapon = await Weapon.create({
      type,
      name: weaponType.name,
      weaponNumber,
    });
    res
      .status(201)
      .json({ message: "Weapon created successfully", weapon: newWeapon });
  } catch (error) {
    console.error("Error adding weapon:", error);
    res
      .status(500)
      .json({ message: "Error adding weapon", error: error.message });
  }
};

const getWeaponTypes = async (req, res) => {
  try {
    const weaponTypes = await WeaponTypes.findAll();
    if (!weaponTypes) {
      throw new Error("No Weapons Types has been found");
    }
    res.status(200).json({ weaponTypes, success: true });
  } catch (e) {
    console.error("Error fetch weaponTypes:", e);
    res
      .status(500)
      .json({ message: "Error fetch weaponTypes", error: e.message });
  }
};

module.exports = { getAllWeapons, addWeapon, getWeaponTypes };
