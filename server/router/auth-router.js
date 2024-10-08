const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const authMiddleware = require("../middleware/auth-middleware")
const validate = require("../middleware/validate-middleware");
const { loginSchema, signupSchema } = require("../validators/auth-validator");

router
  .route("/register")
  .post(validate(signupSchema), authController.RegisterUser);
router.route("/login").post(validate(loginSchema), authController.loginUser);
router.route("/forgot-password").post(authController.forgotPassword);
router.route("/reset-password/:token").put(authController.resetPassword);
router.route("/users").get(authMiddleware,authController.user);

module.exports = router;
