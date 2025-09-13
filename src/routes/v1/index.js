const express = require('express');
const { CityController, FlightContoller, AirportController } = require('../../controllers/index.js');
const { FlightMiddlewares } = require('../../middlewares/index.js');
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);

router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightContoller.create
);
router.get('/flights', FlightContoller.getAllFlights);

router.post('/airports', AirportController.create);

module.exports = router;