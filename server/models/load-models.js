const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loadSchema = new Schema({
  loadNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  origin: {
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  destination: {
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  loadDetails: {
    weight: {
      type: Number,
      required: true,
    },
    dimensions: {
      length: {
        type: Number,
        required: true,
      },
      width: {
        type: Number,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  },
  status: {
    type: String,
    enum: ["Posted", "Assigned", "In Transit", "Delivered"],
    default: "Posted",
  },
  // pickupDate: {
  //   type: Date,
  //   required: true,
  // },
  // deliveryDate: {
  //   type: Date,
  //   required: true,
  // },
});

const Load = mongoose.model("Load", loadSchema);
module.exports = Load;
