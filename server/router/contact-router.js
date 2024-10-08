const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

router
  .route("/contacts")
  .post(authMiddleware, contactController.ContactController);
router
  .route("/delete/:id")
  .delete(authMiddleware, adminMiddleware, contactController.deleteContact);

module.exports = router;
