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
      res
        .status(500)
        .send({ message: `Server Error: ${err.name} - ${err.message}` });
    });
});

router.get("/:id", (req, res) => {
  Message.findByPk(req.params.id)
    .then((message) => {
      if (message === null) {
        res.status(404).send({
          message: `A message with id : ${req.params.id} was not found`,
        });
      } else {
        return res.json(message);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `Server Error: ${err.name} - ${err.message}` });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  Message.update(req.body, {
    where: { id: id },
  })
    .then((rowsUpdated) => {
      if (rowsUpdated == 1) {
        res.send({
          message: "Message was updated successfully.",
        });
      } else if (Object.keys(req.body).length === 0) {
        res.status(500).send({
          message: `Cannot update Message with id=${id}. Request does not have a body`,
        });
      } else {
        res.status(500).send({
          message: `Cannot update Message with id=${id}. Message w/ the given id does not exist.`,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `Server Error: ${err.name} - ${err.message}` });
    });
});

module.exports = router;
