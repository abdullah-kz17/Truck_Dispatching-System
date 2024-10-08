const Dispatch = require("../models/dispatch-models");

const createDispatch = async (req, res, next) => {
  const { load, truck, driver, status, notes } = req.body;

  try {
    const dispatch = new Dispatch({
      load,
      truck,
      driver,
      status,
      notes,
    });

    await dispatch.save();
    res.status(201).json(dispatch);
  } catch (error) {
    next(error);
  }
};

const getAllDispatches = async (req, res, next) => {
  try {
    const dispatches = await Dispatch.find()
      .populate("load", "loadNumber")
      .populate("truck", "truckNumber")
      .populate("driver", "name email");
    res.status(200).json(dispatches);
  } catch (error) {
    next(error);
  }
};

const getDispatchById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const dispatch = await Dispatch.findById(id)
      .populate("load", "loadNumber")
      .populate("truck", "truckNumber")
      .populate("driver", "name email");
    if (!dispatch) {
      return res.status(404).json({ message: "Dispatch not found" });
    }
    res.status(200).json(dispatch);
  } catch (error) {
    next(error);
  }
};

const updateDispatchById = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedDispatch = await Dispatch.findByIdAndUpdate(id, updateData, {
      new: true,
    })
      .populate("load", "loadNumber")
      .populate("truck", "truckNumber")
      .populate("driver", "name email");
    if (!updatedDispatch) {
      return res.status(404).json({ message: "Dispatch not found" });
    }
    res.status(200).json(updatedDispatch);
  } catch (error) {
    next(error);
  }
};

const deleteDispatchById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedDispatch = await Dispatch.findByIdAndDelete(id);
    if (!deletedDispatch) {
      return res.status(404).json({ message: "Dispatch not found" });
    }
    res.status(200).json({ message: "Dispatch deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createDispatch,
  getAllDispatches,
  getDispatchById,
  updateDispatchById,
  deleteDispatchById,
};
