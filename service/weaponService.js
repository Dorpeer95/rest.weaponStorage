const { Weapon } = require("../models");
const Sequelize = require("sequelize");

async function getWeaponDashBoard() {
  try {
    // Calculate sum of weapons by types
    const weaponTypesSum = await calculateWeaponSum("type", "name");

    // Calculate sum of weapons by status where status is 'active'
    const weaponStatusSum = await calculateWeaponSum("status", "status");

    const weaponStatusSumArray = weaponStatusSum.map((item) => {
      let status = item[0];
      // Replace status values with corresponding strings
      if (status === 0) {
        return ["מצאי", item[1]];
      } else if (status === 1) {
        return ["חתומים", item[1]];
      } else if (status === 2) {
        return ["תקולים", item[1]];
      } else {
        return [status, item[1]]; // Keep status value as is
      }
    });

    // Add headers to the arrays
    const weaponStatusSumArrayWithHeader = addHeader(
      weaponStatusSumArray,
      "Task",
      "weapons"
    );
    const weaponTypesSumArray = addHeader(weaponTypesSum, "Task", "weapons");

    return {
      weaponTypesSum: weaponTypesSumArray,
      weaponStatusSum: weaponStatusSumArrayWithHeader,
    };
  } catch (error) {
    console.error("Error fetching weapon stats:", error);
    throw error;
  }
}

async function calculateWeaponSum(groupByField, att, where = {}) {
  const weaponSum = await Weapon.findAll({
    attributes: [att, [Sequelize.fn("COUNT", "id"), "count"]],
    where: where, // Apply where condition if provided
    group: [groupByField],
  });

  return weaponSum.map((weapon) => [weapon.get(att), weapon.get("count")]);
}

function addHeader(array, header1, header2) {
  return [[header1, header2], ...array];
}

module.exports = {
  getWeaponDashBoard,
};
