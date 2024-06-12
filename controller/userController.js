// controllers/soldiersController.js
const { User } = require("../models");

const loginUser = async (req, res) => {
  try {
    console.log(req.body);
    const userName = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ where: { userName, password } });

    if (!user) {
      throw new Error("Invalid username or password");
    }
    res.status(200).json(user);
    return user;
  } catch (error) {
    console.error("Error querying database:", error);
    res.status(500).json({ error: "Error querying database" });
  }
};

module.exports = { loginUser };
