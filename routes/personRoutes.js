const express = require("express");
const router = express.Router();
const Person = require("../models/Person");
const { route } = require("./menuRoutes");

router.post("/", async (req, res) => {
  try {
    const data = req.body; //asuming the request body the person data
    //create a new person document
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const data = await Person.find({ work: workType });

      console.log("data fetched sucessfully");
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: "not work type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    res
      .status(200)
      .json({ message: "Person deleted successfully", data: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersondata = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersondata,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(response);
    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("data updated");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
