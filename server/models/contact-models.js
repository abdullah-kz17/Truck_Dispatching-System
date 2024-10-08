const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactModel = mongoose.model("contacts", ContactSchema);

module.exports = ContactModel;
