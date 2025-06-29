const express = require("express");
const app = express();
const { db } = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json()); //req.body
app.get("/", (req, res) => {
  res.send("hello worlds");
});
//import routes from route file
const personRoutes = require("./routes/personRoutes.js");
const menuRoutes = require("./routes/menuRoutes.js");
app.use("/menu", menuRoutes);
app.use("/person", personRoutes);
app.listen(3000);
