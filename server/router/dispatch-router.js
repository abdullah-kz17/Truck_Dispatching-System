const express = require("express");
const dispatchController = require("../controllers/dispatch-controller");
const authMiddleware = require("../middleware/auth-middleware");

const router = express.Router();

// Create a new dispatch
router.route("/dispatches").post(authMiddleware, dispatchController.createDispatch);

// Get all dispatches
router.route("/dispatches").get(authMiddleware, dispatchController.getAllDispatches);

// Get dispatch by ID
router.route("/dispatches/:id").get(authMiddleware, dispatchController.getDispatchById);

// Update dispatch by ID
router.route("/dispatches/:id").patch(authMiddleware, dispatchController.updateDispatchById);

// Delete dispatch by ID
router.route("/dispatches/:id").delete(authMiddleware, dispatchController.deleteDispatchById);

module.exports = router;
