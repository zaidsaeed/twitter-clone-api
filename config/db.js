const { Sequelize } = require("sequelize");

exports.createDB = () =>
  new Sequelize("postgres", "postgres", "password", {
    host: "twitter-clone-db.cezw9lbsfclc.us-west-2.rds.amazonaws.com",
    dialect: "postgres",
    port: 5432,
  });

exports.testDBConnection = (sequelize) => {
  //DB Test
  sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((err) => console.log(err));
};
