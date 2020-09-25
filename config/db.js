const { Sequelize } = require("sequelize");

const testDB = {
  host: "twitter-clone-testing.cezw9lbsfclc.us-west-2.rds.amazonaws.com",
};

const prodDB = {
  host: "twitter-clone-db.cezw9lbsfclc.us-west-2.rds.amazonaws.com",
};

const env = process.env.NODE_ENV || "prod";

const db = new Sequelize("postgres", "postgres", "password", {
  host: env === "prod" ? prodDB.host : testDB.host,
  dialect: "postgres",
  port: 5432,
  logging: false,
});

const testDBConnection = (sequelize) => {
  //DB Test
  sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((err) => console.log(err));
};

module.exports = { db, testDBConnection };
