const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roomCount: { type: [String], default: [] },
  subscription: { type: Boolean, default: false },
  subscriptionType: { type: String, default: null },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
