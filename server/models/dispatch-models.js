const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the dispatch schema
const dispatchSchema = new Schema({
  load: {
    type: Schema.Types.ObjectId,
    ref: "Load",
    required: true,
  },
  truck: {
    type: Schema.Types.ObjectId,
    ref: "Truck",
    required: true,
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "In Transit", "Completed", "Cancelled"],
    default: "Pending",
    required: true,
  },
  assignedDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  completedDate: {
    type: Date,
  },
  notes: {
    type: String,
    trim: true,
  },
});

// Create and export the Dispatch model
const Dispatch = mongoose.model("Dispatch", dispatchSchema);
module.exports = Dispatch;
