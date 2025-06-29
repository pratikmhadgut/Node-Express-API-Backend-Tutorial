const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGOURL);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("mongodbdatabase connectes successfully");
});
db.on("error", (err) => {
  console.log("some thing happen to database");
});
module.exports = { db };
