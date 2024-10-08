const express = require("express");
const loadController = require("../controllers/load-controller");
const authMiddleware = require("../middleware/auth-middleware");

const router = express.Router();

// Create loads
router.route("/loads").post(authMiddleware, loadController.createLoad);

// Get all loads
router.route("/loads").get(authMiddleware, loadController.getAllLoads);

// Get load by ID
router.route("/loads/:id").get(authMiddleware, loadController.getLoadById);

// Update load by ID
router.route("/loads/:id").patch(authMiddleware, loadController.updateLoadById);

// Delete load by ID
router
  .route("/loads/:id")
  .delete(authMiddleware, loadController.deleteLoadById);

module.exports = router;
