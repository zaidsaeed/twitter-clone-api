const express = require("express");
const { Sequelize } = require("sequelize");

const app = express();

const sequelize = new Sequelize("postgres", "postgres", "password", {
  host: "twitter-clone-db.cezw9lbsfclc.us-west-2.rds.amazonaws.com",
  dialect: "postgres",
  port: 5432,
});

//DB Test
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
