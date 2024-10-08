const Load = require("../models/load-models");

// Create truck
const createLoad = async (req, res, next) => {
  const {
    loadNumber,
    origin,
    destination,
    truckTypeRequired,
    loadDetails,
    // pickupDate,
    // deliveryDate,
  } = req.body;
  try {
    const load = new Load({
      loadNumber,
      origin,
      destination,
      truckTypeRequired,
      loadDetails,
      // pickupDate,
      // deliveryDate,
    });
    const existingLoad = await Load.findOne({ loadNumber: loadNumber });
    if (existingLoad) {
      res.status(400).json({ message: "Load already Exists" });
    }
    await load.save();
    res.status(201).json({ message: "Load created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
};

// Get all loads
const getAllLoads = async (req, res, next) => {
  try {
    const loads = await Load.find();
    res.status(200).json(loads);
  } catch (error) {
    next(error);
  }
};

// Get load by ID
const getLoadById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const load = await Load.findById(id).populate("shipper", "name email");
    if (!load) {
      return res.status(404).json({ message: "Load not found" });
    }
    res.status(200).json(load);
  } catch (error) {
    next(error);
  }
};

// Update load by ID
const updateLoadById = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedLoad = await Load.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedLoad) {
      return res.status(404).json({ message: "Load not found" });
    }
    res.status(200).json(updatedLoad);
  } catch (error) {
    next(error);
  }
};

// Delete load by ID
const deleteLoadById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedLoad = await Load.findByIdAndDelete(id);
    if (!deletedLoad) {
      return res.status(404).json({ message: "Load not found" });
    }
    res.status(200).json({ message: "Load deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// // Get loads by shipper
// const getLoadsByShipper = async (req, res, next) => {
//   const { shipperId } = req.params;
//   try {
//     const loads = await Load.find({ shipper: shipperId }).populate(
//       "shipper",
//       "name email"
//     );
//     res.status(200).json(loads);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  createLoad,
  getAllLoads,
  getLoadById,
  updateLoadById,
  deleteLoadById,
};
