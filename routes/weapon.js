const express = require("express");
const router = express.Router();
const WeaponController = require("../controller/weaponController");

router.get("/getWeapons", WeaponController.getAllWeapons);
router.post("/addWeapon", WeaponController.addWeapon);
router.post("/weaponTypes", WeaponController.getWeaponTypes);

module.exports = router;
