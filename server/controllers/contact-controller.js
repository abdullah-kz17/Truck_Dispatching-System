const ContactModel = require("../models/contact-models");

const ContactController = async (req, res) => {
  try {
    const { username, email, subject, message } = req.body;
    const contact = await ContactModel.create({
      username,
      email,
      subject,
      message,
    });
    res.status(200).json({ message: "Message sent successfully", contact });
  } catch (error) {
    res.status(500).json({ error: "Message not delivered" });
    console.log(error);
  }
};

const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const contact = await ContactModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Contact not deleted" });
    console.log(error);
  }
};

module.exports = { ContactController, deleteContact };
