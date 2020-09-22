const express = require("express");

const { db, testDBConnection } = require("./config/db");

const User = require("./models/User");
const Message = require("./models/Message");

const userRoutes = require("./routes/User");
const messageRoutes = require("./routes/Message");

const bodyParser = require("body-parser");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

testDBConnection(db);

User.hasMany(Message, {
  foreignKey: {
    name: "username",
  },
});

Message.belongsTo(User);

app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
