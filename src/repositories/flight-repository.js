const { Op, where } = require('sequelize');
const { Flights } = require('../models/index.js');

class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        // if (data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price: { [Op.gte]: data.minPrice } },
        //             { price: { [Op.lte]: data.maxPrice } }
        //         ]
        //     });
        // }
        let priceFilter = [];
        if (data.minPrice) {
            //Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
            priceFilter.push({ price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice) {
            //Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
        }
        Object.assign(filter, { [Op.and]: priceFilter });
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            console.log(filterObject);
            const allFlights = await Flights.findAll({
                // where: {
                //     price: {
                //         [Op.between]: [filter?.minPrice, filter?.maxPrice],
                //     }
                // },
                where: filterObject,
            });
            return allFlights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

}

/**
 * Select * from Flights
 * where price >= 5000 && arivalAirportId && departureAirportId
 */

module.exports = FlightRepository;