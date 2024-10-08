const UserModel = require("../models/user-models");
const ContactModel = require("../models/contact-models");
// const ContactModel = require("../models/user-models");

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find({}, { password: 0 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    next(error); // it will forward errors to front-end
  }
};

// Get all messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactModel.find();
    res.status(200).json({ messages });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching messages" });
  }
};

// Delete user by ID
const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
};

// Get user by ID
const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id, { password: 0 });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update user by ID
const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await UserModel.findByIdAndUpdate(
      id,
      { $set: updatedUserData },
      { new: true }
    );

    if (!updatedData)
      return res.status(404).json({ message: "User not found" });

    res
      .status(200)
      .json({ message: "User updated successfully", data: updatedData });
  } catch (error) {
    next(error);
  }
};

// Update User profile picture
const updateUserProfilePicture = async (req, res) => {
  const userId = req.params.id; // Ensure this matches your route parameter
  const { profilePicture } = req.body;

  if (!userId || !profilePicture) {
    return res
      .status(400)
      .send({ message: "User ID and profile picture URL are required" });
  }

  try {
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { profilePicture },
      { new: true } // Return the updated user
    );

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send(user); // Return the updated user with a 200 status code
  } catch (error) {
    console.error("Error updating profile picture:", error); // Log the error for debugging
    res.status(500).send({ message: "Error updating profile picture", error }); // Return error message with 500 status code
  }
};
module.exports = {
  getAllUsers,
  getAllMessages,
  deleteUserById,
  getUserById,
  updateUserById,
  updateUserProfilePicture,
};
