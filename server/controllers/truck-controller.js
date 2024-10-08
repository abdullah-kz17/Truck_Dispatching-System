const Truck = require("../models/truck-model");

// Create truck
const createTruck = async (req, res) => {
  const {
    truckNumber,
    licensePlate,
    driver,
    truckType,
    capacity,
    location,
    status,
  } = req.body;
  try {
    const newTruck = new Truck({
      truckNumber,
      licensePlate,
      driver,
      truckType,
      capacity,
      location,
      status,
    });
    // Check if a truck with the same truckNumber or licensePlate already exists
    const existingTruck = await Truck.findOne({
      $or: [{ truckNumber }, { licensePlate }],
    });

    if (existingTruck) {
      return res.status(400).json({
        message: "Truck with this truckNumber or licensePlate already exists",
      });
    }
    const truck = await newTruck.save();
    res.status(201).json({ message: "Truck added" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Get all trucks
const getAllTrucks = async (req, res, next) => {
  try {
    const trucks = await Truck.find();
    res.status(200).json(trucks);
  } catch (error) {
    next(error);
  }
};

// Get truck by ID
const getTruckById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const truck = await Truck.findById(id);
    if (!truck) {
      return res.status(404).json({ message: "Truck not found" });
    }
    res.status(200).json(truck);
  } catch (error) {
    next(error);
  }
};

// Update truck by ID
const updateTruckById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const truckToUpdate = req.body;
    // Check if a truck with the same truckNumber or licensePlate already exists
    const existingTruck = await Truck.findOne({
      $or: [{ truckNumber }, { licensePlate }],
      _id: { $ne: id }, // Exclude the current truck from the check
    });

    if (existingTruck) {
      return res.status(400).json({
        message:
          "Another truck with this truckNumber or licensePlate already exists",
      });
    }
    const updatedTruck = await Truck.findByIdAndUpdate(id, truckToUpdate, {
      new: true,
    });
    if (!updatedTruck) {
      return res.status(404).json({ message: "Truck not found" });
    }
    res.status(200).json(updatedTruck);
  } catch (error) {
    next(error);
  }
};

// Delete truck by ID
const deleteTruckById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedTruck = await Truck.findByIdAndDelete(id);
    if (!deletedTruck) {
      return res.status(404).json({ message: "Truck not found" });
    }
    res.status(200).json({ message: "Truck deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTrucks,
  getTruckById,
  updateTruckById,
  deleteTruckById,
  createTruck,
};
