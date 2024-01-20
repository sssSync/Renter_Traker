const mongoose = require("mongoose");

// Define the Room Schema
const roomSchema = new mongoose.Schema({
  // Room Details
  Title: { type: String, required: true },// Title of the room
  Description: { type: String, required: true },
  Price: { type: Number, required: true }, // Price of the room
  Available: { type: String }, // Availability status
  BuildingTypes:{ type:String },
  typeOfRoom: { type: String, required: true }, // Type of room (e.g., Single, Double)
  isStudent: { type: Boolean, required: true }, // Indicates if it's for students
  forWhom: { type: String, required: true }, // Target audience (e.g., Male, Female,both)



//  Location Details
  landmark: [{ type: String, required: true }], // Landmarks near the room
  Address: {
    district: { type: String, required: true }, // District of the room
    state: { type: String, required: true }, // State of the room
    city: { type: String, required: true }, // City of the room
    pin: { type: String, required: true }, // PIN code of the room
    sector: { type: String, required: true }, // Sector of the room
  },
  collegeDistance: { type: String }, // Distance to the college
  MarketDistance: { type: String },
  Coordinate: { type: String }, // Coordinates of the room location

//  Room Details
  Details: {
    wifi: { type: Boolean, required: true }, // Availability of WiFi
    food: { type: Boolean, required: true }, // Availability of food
    bed: { type: Boolean, required: true }, // Availability of bed
    kitchenFacility: { type: Boolean, required: true }, // Availability of kitchen facilities
    DrinkingWater: { type: Boolean, required: true }, // Availability of drinking water
    ToiletType: { type: String, required: true }, // Type of toilet facilities
  },


  // Image Section
  mainImage: { type: String, required: true }, // URL for the main room image
  extraImages: [{ type: String, required: true }], // URLs for additional room images

  // Extra Details
  extraDetails: [{ type: String }], // Additional details about the room
  

  // Owner Details
  Ownername: { type: String, required: true },
  PhoneNumber: { type: Number, required: true },
  Mail: { type: String, required: true },
  Address: { type: String, required: true },



  // FAQ Section
  faq: [{ question: String, answer: String }], // FAQ array with questions and answers
  feedbacks: [{ type: Number }], // Array to store feedbacks

  // Calculated field for average feedback
  feedback: {
    type: Number,
    default: 0, // Default value for feedback
  },
});

// Create the Room model
const Room = mongoose.model("Room", roomSchema);

// Export the Room model
module.exports = Room;
