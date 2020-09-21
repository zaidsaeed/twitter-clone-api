const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", (req, res) => {
  User.create({ username: req.body.username, password: req.body.password })
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => console.log("err", err));
});

module.exports = router;
