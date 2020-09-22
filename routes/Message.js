const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.post("/", (req, res) => {
  Message.create({ username: req.body.username, messafe: req.body.message })
    .then((message) => {
      return res.json(message);
    })
    .catch((err) => console.log("err", err));
});

module.exports = router;
