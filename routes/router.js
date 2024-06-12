const express = require("express");
const router = express.Router();
const weaponRouter = require("./weapon");
const userRouter = require("./user");

router.use("/weapon", weaponRouter);
router.use("/user", userRouter);

module.exports = router;
