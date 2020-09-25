const { Sequelize } = require("sequelize");
const { db } = require("../config/db.js");
const User = require("./User.js");

const Message = db.define("Message", {
  username: {
    type: Sequelize.STRING,
    references: User.username,
  },
  messageText: { type: Sequelize.STRING },
});

Message.associate = function (models) {
  Message.hasOne(User, { foreignKey: "username" });
};

Message.sync()
  .then(() => {
    // console.log("Message table created");
  })
  .catch((err) => {
    console.log("eer", err);
    return err;
  });

module.exports = Message;
