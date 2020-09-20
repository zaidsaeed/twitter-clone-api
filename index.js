const express = require("express");

const { createDB, testDBConnection } = require("./config/db");

const app = express();

const db = createDB();

testDBConnection(db);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
