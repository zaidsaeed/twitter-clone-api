const { Sequelize } = require("sequelize/types");
const { db } = "../config/db.js";

const User = db.define("user", {
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
});

module.exports = User;
