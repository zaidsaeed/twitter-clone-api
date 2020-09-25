"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Messages",
      [
        {
          messageText: "MESSGE TEXT",
          username: "emre@smith.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          messageText: "MESSGE TEXT",
          username: "john@stone.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          messageText: "MESSGE TEXT",
          username: "tony",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Messages", null, {});
  },
};
