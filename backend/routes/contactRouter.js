const express = require("express");
const router = express.Router();
const Comment = require("../model/contactModel");

router.post("/contact", async (req, res) => {
  try {
    const { name, email, feedback } = req.body;

    console.log("Received Comment:", { name, email, feedback });

    const newComment = new Comment({
      name,
      email,
      feedback
    });
    
    await newComment.save();

    res.status(201).json({ message: "Comment submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
