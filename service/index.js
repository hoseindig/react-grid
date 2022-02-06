const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
///////////////////
app.use(cors());
app.use(bodyParser.json());
///////////////////
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

app.listen(3900, () => {
  console.log("Node server started on port 3900.");
});
