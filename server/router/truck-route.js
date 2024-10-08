const express = require('express');
const router = express.Router();
const truckController = require('../controllers/truck-controller');


router.route('/trucks').post(truckController.createTruck)
router.route('/trucks').get(truckController.getAllTrucks);
router.route('/trucks/:id').get(truckController.getTruckById);
router.route('/trucks/:id').patch(truckController.updateTruckById);
router.route('/trucks/:id').delete(truckController.deleteTruckById);

module.exports = router;
