const express = require("express");
const router = express.Router();
const MenuItem = require("../models/Menu");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const Menu = new MenuItem(data);
    const response = await Menu.save();
    console.log("data saved ");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    res.status(200).json(data);
    console.log("data fetched successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.get("/:taste", async (req, res) => {
  try {
    const tasteType = req.params.taste;
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "salty") {
      const data = await MenuItem.find({ taste: tasteType });
      console.log("data fetched");
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedmenu = req.body;
    const response = await MenuItem.findByIdAndUpdate(personId, updatedmenu, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(personId);

    res
      .status(200)
      .json({ message: "Menu item deleted successfully", data: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
module.exports = router;
