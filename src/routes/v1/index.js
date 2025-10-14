const express = require('express');
const { CityController, FlightContoller, AirportController } = require('../../controllers/index.js');
const { FlightMiddlewares } = require('../../middlewares/index.js');
const router = express.Router();

//endpoints for city
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);

//endpoints for flights
router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightContoller.create
);
router.get('/flights/:id', FlightContoller.getFlight);
router.get('/flights', FlightContoller.getAllFlights);
router.patch('/flights/:id', FlightContoller.updateFlights);

//endpoints for airports
router.post('/airports', AirportController.create);

module.exports = router;