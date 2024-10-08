const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the truck schema
const truckSchema = new Schema({
  truckNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  licensePlate: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model (Driver)
    required: true,
  },
  truckType: {
    type: String,
    enum: ["Flatbed", "Refrigerated", "Dry Van", "Tank", "Other"],
    required: true,
  },
  capacity: {
    type: Number, // Capacity in tons or kilograms
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"], // For geospatial indexing
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: "2dsphere",
    },
  },
  status: {
    type: String,
    enum: ["Available", "In Transit", "Under Maintenance", "Unavailable"],
    default: "Available",
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Truck model
const Truck = mongoose.model("Truck", truckSchema);
module.exports = Truck;
