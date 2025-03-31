const express = require("express");
const Contact = require("../models/contactModel");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save contact." });
  }
});

module.exports = router;