const mongoose = require('mongoose');



const connectDB = async () => {
  try {
    const mongoURI = 'mongodb+srv://mess123:mEES-fiNdERRRR@cluster0.sjhwzwu.mongodb.net/';
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connect(mongoURI);

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectDB;





