const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, userController.getAllUsers);
router
  .route("/messages")
  .get(authMiddleware, adminMiddleware, userController.getAllMessages);
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, userController.getUserById);
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, userController.updateUserById);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, userController.deleteUserById);
router
  .route("/users/profile-picture/:id")
  .patch(authMiddleware, userController.updateUserProfilePicture);

module.exports = router;
