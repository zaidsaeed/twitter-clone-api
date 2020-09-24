const { db, testDBConnection } = require("./config/db");
const app = require("./app.js");

const User = require("./models/User");
const Message = require("./models/Message");

testDBConnection(db);

User.hasMany(Message, {
  foreignKey: {
    name: "username",
  },
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
