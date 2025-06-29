const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mhadgutpratik15:pratik241101@cluster0.gw0b5po.mongodb.net/hotels"
);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("mongodbdatabase connectes successfully");
});
db.on("error", (err) => {
  console.log("some thing happen to database");
});
module.exports = { db };
