const mongoose = require("mongoose");
const menuitemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    required: true,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});
const MenuItem = mongoose.model("MenuItems", menuitemsSchema);
module.exports = MenuItem;
