const express = require("express");
const userRoutes = require("./routes/User");
const messageRoutes = require("./routes/Message");
const logger = require("morgan");

const bodyParser = require("body-parser");

const app = express();
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//logger
app.use(logger(":method :remote-addr :date[clf]"));

app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

module.exports = app;
