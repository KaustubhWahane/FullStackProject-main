const express = require('express');
const router = express.Router();
const UserModel = require('../model/userModel');

router.post('/signin', async (req, res) => {
  try {
    const { name, password } = req.body;
    const newUser = new UserModel({ name, password });
    await newUser.save();
    res.status(201).json({ message: "User saved", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
