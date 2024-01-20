const express = require("express");
const router = express.Router();
const User = require("../Model/user");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Room = require('../Model/room');
const authenticateToken = require('../lib/authMiddleWare');


router.use(cookieParser());

router.post("/signup", async (req, res) => {
  try {
    const { name, phoneNumber, password } = req.body;
    const newUser = new User({ name, phoneNumber, password });
    await newUser.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error(error); // Log the actual error
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    const user = await User.findOne({ phoneNumber, password });

    if (user) {
      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, name: user.name },
        "hbhbuhxbhSBBXIASHH",
        { expiresIn: "2d" }
      );

      // Set the cookie with the token
      res.cookie("authToken", token, {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ error: "Invalid phone number or password" });
    }
  } catch (error) {
    console.error(error); // Log the actual error
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;