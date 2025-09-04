const { Flights } = require('../models/index.js');

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;