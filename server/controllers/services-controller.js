const ServiceModel = require("../models/services-models");

const getAllServices = async (req, res) => {
  try {
    const services = await ServiceModel.find();
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching services" });
  }
};

module.exports = {
  getAllServices,
};
