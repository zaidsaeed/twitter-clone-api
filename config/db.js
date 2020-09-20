const { Sequelize } = require("sequelize");

const db = new Sequelize("postgres", "postgres", "password", {
  host: "twitter-clone-db.cezw9lbsfclc.us-west-2.rds.amazonaws.com",
  dialect: "postgres",
  port: 5432,
});

const testDBConnection = (sequelize) => {
  //DB Test
  sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((err) => console.log(err));
};

module.exports = { db, testDBConnection };
