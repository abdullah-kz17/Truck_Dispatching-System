const express = require("express");
const servicesController = require("../controllers/services-controller");
const router = express.Router();

router.get("/services", servicesController.getAllServices);

module.exports = router;
