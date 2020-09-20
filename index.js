const express = require("express");

const { db, testDBConnection } = require("./config/db");

const userRoutes = require("./routes/User");

const app = express();

testDBConnection(db);

app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
