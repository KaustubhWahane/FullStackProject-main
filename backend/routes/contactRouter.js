const express = require('express');
const router = express.Router();
const Comment = require('../model/contactModel'); 

router.post('/contact', async (req, res) => {
  try {
    const { name, email, feedback } = req.body;
    const newComment = new Comment({ name, email, feedback });
    await newComment.save();
    res.status(201).json({ message: "Comment saved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
