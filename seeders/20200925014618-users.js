"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "tony",
          password: "123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "emre@smith.com",
          password: "123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "john@stone.com",
          password: "123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
