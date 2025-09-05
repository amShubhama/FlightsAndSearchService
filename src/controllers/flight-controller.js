const { FlightService } = require('../services/index.js');

const flightService = new FlightService();
const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error,
        })
    }
}

const getAllFlights = async (req, res) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            err: {},
            message: "Successfully fetched all flights data",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able t fetch flights data",
            err: error
        })
    }
}
module.exports = {
    create,
    getAllFlights,
}