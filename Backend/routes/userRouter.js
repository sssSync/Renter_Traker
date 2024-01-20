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


// Add room
router.post('/addroom', authenticateToken, async (req, res) => {
  try {
    // Get the user ID from the authenticated token
    const userId = req.user._id;

    // Check if the user has an active subscription
    const user = await User.findById(userId);
    if (!user.subscription) {
      return res.status(403).json({ error: 'User does not have an active subscription' });
    }

    // Extract data from the request body and create a new room
    const newRoom = new Room(req.body);
    await newRoom.save();

    res.status(201).json({ message: 'Room added successfully' });
  } catch (error) {
    console.error('Error adding room:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Remove room
router.delete('/removeroom/:title', authenticateToken, async (req, res) => {
  try {
    // Get the user ID from the authenticated token
    const userId = req.user._id;

    // Check if the user has an active subscription
    const user = await User.findById(userId);
    if (!user.subscription) {
      return res.status(403).json({ error: 'User does not have an active subscription' });
    }

    const title = req.params.title;
    const result = await Room.deleteOne({ Title: title });

    if (result.deletedCount > 0) {
      res.json({ message: 'Room removed successfully' });
    } else {
      res.status(404).json({ error: 'Room not found' });
    }
  } catch (error) {
    console.error('Error removing room:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/search/address', async (req, res) => {
  try {
    const { district, state, city, pin, sector } = req.query;

    const rooms = await Room.find({
      'Address.district': { $regex: new RegExp(district, 'i') },
      'Address.state': { $regex: new RegExp(state, 'i') },
      'Address.city': { $regex: new RegExp(city, 'i') },
      'Address.pin': { $regex: new RegExp(pin, 'i') },
      'Address.sector': { $regex: new RegExp(sector, 'i') },
    });

    res.json({ rooms });
  } catch (error) {
    console.error('Error searching rooms by address:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Search rooms by landmark
router.get('/search/landmark', async (req, res) => {
  try {
    const { landmark } = req.query;

    const rooms = await Room.find({
      landmark: { $regex: new RegExp(landmark, 'i') },
    });

    res.json({ rooms });
  } catch (error) {
    console.error('Error searching rooms by landmark:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  // Add a question to the FAQ section
  router.post('/faq/question', authenticateToken, async (req, res) => {
    try {
      const { roomId, question } = req.body;
  
      // Find the room by _id and update the FAQ section
      const room = await Room.findByIdAndUpdate(
        roomId,
        { $push: { faq: { question } } },
        { new: true }
      );
  
      res.json({ room });
    } catch (error) {
      console.error('Error adding question to FAQ:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  // Add an answer to a question in the FAQ section
  router.post('/faq/answer', authenticateToken, async (req, res) => {
    try {
      const { roomId, questionIndex, answer } = req.body;
  
      // Find the room by _id and update the answer in the FAQ section
      const room = await Room.findByIdAndUpdate(
        roomId,
        { $set: { [`faq.${questionIndex}.answer`]: answer } },
        { new: true }
      );
  
      const newRes = room.faq
  
      res.json({ newRes });
    } catch (error) {
      console.error('Error adding answer to FAQ:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  // Add feedback to a room
  router.post('/feedback', authenticateToken, async (req, res) => {
    try {
      const { roomId, feedback } = req.body;
  
      // Find the room by _id and update the feedback
      const room = await Room.findByIdAndUpdate(
        roomId,
        { $push: { feedbacks: feedback } },
        { new: true }
      );
  
      // Calculate the average feedback and update the room
      const totalFeedback = room.feedbacks.reduce((sum, value) => sum + value, 0);
      const avgFeedback = Math.ceil(totalFeedback / room.feedbacks.length);
  
      // Update the room with the average feedback
      const updatedRoom = await Room.findByIdAndUpdate(
        roomId,
        { $set: { feedback: avgFeedback } },
        { new: true }
      );
  
      res.json({ room: updatedRoom });
    } catch (error) {
      console.error('Error adding feedback:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });




module.exports = router;