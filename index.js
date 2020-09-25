const { db, testDBConnection } = require("./config/db");
const app = require("./app.js");

testDBConnection(db);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
