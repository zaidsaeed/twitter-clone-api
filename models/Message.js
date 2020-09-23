const { Sequelize } = require("sequelize");
const { db } = require("../config/db.js");
const User = require("./User.js");

const Message = db.define("message", {
  username: {
    type: Sequelize.STRING,
    references: User.username,
  },
  messageText: { type: Sequelize.STRING },
});

Message.sync()
  .then(() => {
    console.log("Message table created");
  })
  .catch((err) => {
    console.log("eer", err);
    return err;
  });

module.exports = Message;
