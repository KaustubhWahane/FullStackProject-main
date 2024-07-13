const express = require("express");
const router = express.Router();
const UserModel = require("../model/userModel");

router.post('/signin', async (req, res) => {
  try {
    const { name, password } = req.body;
    
    const newUser = new UserModel({ name, password }); 
    await newUser.save(); 
    console.log('This is the message to check if the user is entered', newUser);

    res.status(200).json({ message: "Signin successful", redirect: "/", user: newUser });
  } catch (error) {
    console.error("Error signin in:", error.message);
    res.status(500).json({ error: "Error during signin" });
  }
});

module.exports = router;
