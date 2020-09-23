const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.post("/", (req, res) => {
  Message.create({
    username: req.body.username,
    messageText: req.body.messageText,
  })
    .then((message) => {
      return res.json(message);
    })
    .catch((err) => {
      console.log("err", err);
      return err;
    });
});

router.get("/", (req, res) => {
  console.log("ey");
});

router.get("/:id", (req, res) => {
  console.log("heress");
  Message.findByPk(req.params.id)
    .then((message) => {
      return res.json(message);
    })
    .catch((err) => {
      console.log("err", err);
      return err;
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  Message.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Message was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Message with id=${id}. Maybe Message was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Message with id=" + id,
      });
    });
});

module.exports = router;
