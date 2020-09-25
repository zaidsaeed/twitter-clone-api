const express = require("express");
const router = express.Router();
const { db } = require("../config/db");
const DataTypes = require("sequelize/lib/data-types");
const User = require("../models/User");

router.post("/", (req, res) => {
  User.create({ username: req.body.username, password: req.body.password })
    .then((user) => {
      return res.json(user);
    })
    .catch((err) =>
      res
        .status(500)
        .send({ message: `Server Error: ${err.name} - ${err.message}` })
    );
});

module.exports = router;
