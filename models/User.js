const { Sequelize } = require("sequelize");
const { db } = require("../config/db.js");
const Message = require("./Message");

const User = db.define("user", {
  username: { type: Sequelize.STRING, primaryKey: true },
  password: { type: Sequelize.STRING },
});

User.sync()
  .then(() => {
    console.log("User table created");
  })
  .catch((err) => {
    console.log(err);
    return err;
  });

module.exports = User;
